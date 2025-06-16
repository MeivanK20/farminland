import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";

export default function FarmersList() {
  const [farmers, setFarmers] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    const fetchFarmers = async () => {
      const querySnapshot = await getDocs(collection(db, "farmers"));
      const list = querySnapshot.docs.map((doc) => doc.data());
      setFarmers(list);
    };

    fetchFarmers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Discuter avec un fermier</h2>
      {farmers.map(
        (farmer) =>
          farmer.uid !== currentUser?.uid && (
            <div key={farmer.uid}>
              <Link href={`/chat/${farmer.uid}`}>
                {farmer.name} ({farmer.type})
              </Link>
            </div>
          )
      )}
    </div>
  );
}
