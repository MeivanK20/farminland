import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function sendNotification(toUserId: string, fromUserId: string, message: string) {
  const id = `${Date.now()}`;
  await setDoc(doc(db, "notifications", toUserId, "items", id), {
    from: fromUserId,
    message,
    read: false,
    timestamp: new Date().toISOString()
  });
}
