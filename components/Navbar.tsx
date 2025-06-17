import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        FarmInLand
      </Link>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link
              href="/profile"
              className={`hover:underline ${router.pathname === "/profile" ? "underline" : ""}`}
            >
              Profil
            </Link>
            <Link
              href="/edit-profile"
              className={`hover:underline ${router.pathname === "/edit-profile" ? "underline" : ""}`}
            >
              Modifier le profil
            </Link>
            <span className="hidden sm:inline text-sm">
              Bonjour, {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="bg-white text-green-700 px-3 py-1 rounded hover:bg-gray-200 transition"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className={`hover:underline ${router.pathname === "/login" ? "underline" : ""}`}
            >
              Connexion
            </Link>
            <Link
              href="/signup"
              className={`hover:underline ${router.pathname === "/signup" ? "underline" : ""}`}
            >
              Inscription
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
