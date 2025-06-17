import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "@/lib/firebase";
import {
  updateEmail,
  updatePassword,
  onAuthStateChanged,
  User,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

export default function EditProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
        setEmail(currentUser.email || "");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleUpdate = async () => {
    if (!user || !currentPassword) return;

    const credential = EmailAuthProvider.credential(user.email!, currentPassword);

    try {
      await reauthenticateWithCredential(user, credential);
      if (email !== user.email) {
        await updateEmail(user, email);
      }
      if (password) {
        await updatePassword(user, password);
      }
      setMessage("Profil mis à jour !");
    } catch (error: any) {
      console.error(error);
      setMessage("Erreur : " + error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 mt-8 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Modifier mon profil</h1>

      <label className="block mb-2 font-semibold">Adresse e-mail</label>
      <input
        className="w-full p-2 border mb-4 rounded"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="block mb-2 font-semibold">Nouveau mot de passe</label>
      <input
        className="w-full p-2 border mb-4 rounded"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Laisser vide pour ne pas changer"
      />

      <label className="block mb-2 font-semibold">Mot de passe actuel</label>
      <input
        className="w-full p-2 border mb-4 rounded"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        placeholder="Requis pour valider les changements"
      />

      <button
        className="bg-green-700 text-white px-4 py-2 rounded"
        onClick={handleUpdate}
      >
        Mettre à jour
      </button>

      {message && <p className="mt-4 text-sm text-center">{message}</p>}
    </div>
  );
}
