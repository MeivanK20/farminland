import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [type, setType] = useState("agriculteur");
  const [location, setLocation] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const ref = doc(db, "farmers", currentUser.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setName(data.name || "");
          setBio(data.bio || "");
          setType(data.type || "agriculteur");
          setLocation(data.location || "");
        }
      }
    });
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (!user) return;
    await setDoc(doc(db, "farmers", user.uid), {
      name,
      bio,
      type,
      location,
      uid: user.uid,
      email: user.email,
      updatedAt: new Date().toISOString(),
    });
    alert("Profil mis à jour !");
  };

  if (!user) return <p>Connexion requise.</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Mon Profil</h2>
      <form onSubmit={handleSave}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
        /><br />
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        /><br />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="agriculteur">Agriculteur</option>
          <option value="éleveur">Éleveur</option>
        </select><br />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Localisation"
        /><br />
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
