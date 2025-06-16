import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function FarmerProfile() {
  const router = useRouter();
  const { uid } = router.query;
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (!uid) return;
    const fetchProfile = async () => {
      const ref = doc(db, "farmers", uid as string);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setProfile(snap.data());
      }
    };
    fetchProfile();
  }, [uid]);

  if (!profile) return <p>Chargement du profil...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{profile.name}</h2>
      <p><strong>Bio :</strong> {profile.bio}</p>
      <p><strong>Type :</strong> {profile.type}</p>
      <p><strong>Localisation :</strong> {profile.location}</p>
    </div>
  );
}
