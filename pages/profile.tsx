import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/lib/firebase";
import {
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword,
  User
} from "firebase/auth";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || "");
        setNewEmail(currentUser.email || "");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleUpdate = async () => {
    try {
      if (user) {
        if (displayName !== user.displayName) {
          await updateProfile(user, { displayName });
        }
        if (newEmail !== user.email) {
          await updateEmail(user, newEmail);
        }
        if (newPassword.length >= 6) {
          await updatePassword(user, newPassword);
        }
        setMessage("Profil mis à jour avec succès !");
      }
    } catch (error: any) {
      setMessage("Erreur : " + error.message);
    }
  };

  if (loading) return <div className="p-4 text-center">Chargement...</div>;
  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded mt-6">
      <h1 className="text-2xl font-bold mb-4">Mon Profil</h1>

      {message && <p className="mb-4 text-blue-600">{message}</p>}

      <label className="block mb-2">
        Nom affiché :
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-2">
        Adresse e-mail :
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </label>

      <label className="block mb-4">
        Nouveau mot de passe :
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border p-2 rounded mt-1"
          placeholder="Laisser vide si inchangé"
        />
      </label>

      <button
        onClick={handleUpdate}
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
      >
        Mettre à jour le profil
      </button>
    </div>
  );
}
