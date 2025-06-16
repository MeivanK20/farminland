import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function getChatId(uid1: string, uid2: string): string {
  return [uid1, uid2].sort().join("_");
}

export default function ChatPage() {
  const router = useRouter();
  const { uid } = router.query;
  const [user, setUser] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMsg, setNewMsg] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!uid || !user) return;
    const chatId = getChatId(user.uid, uid as string);
    const q = query(
      collection(db, "chats", chatId, "messages"),
      orderBy("timestamp", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, [uid, user]);

  const sendMessage = async () => {
    if (!newMsg.trim()) return;
    const chatId = getChatId(user.uid, uid as string);
    await addDoc(collection(db, "chats", chatId, "messages"), {
      senderId: user.uid,
      text: newMsg,
      timestamp: serverTimestamp(),
    });
    setNewMsg("");
  };

  if (!user) return <p>Connexion requise</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Discussion</h2>
      <div style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "1em" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.senderId === user.uid ? "right" : "left" }}>
            <span style={{ background: "#eee", padding: 6, borderRadius: 6 }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
        placeholder="Votre message..."
        style={{ width: "80%" }}
      />
      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
}
