import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Home, MessageSquare, User } from "lucide-react"; // Utilise lucide-react ou heroicons

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
        {/* Logo et nom */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80">
          <Image
            src="/logo.png"
            alt="FarmInLand Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-bold text-green-800">FarmInLand</span>
        </Link>

        {/* Menu de navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="flex items-center gap-1 hover:text-green-700">
            <Home size={18} /> Accueil
          </Link>
          <Link href="/feed" className="flex items-center gap-1 hover:text-green-700">
            <MessageSquare size={18} /> Fil d’actu
          </Link>
          <Link href="/chat" className="flex items-center gap-1 hover:text-green-700">
            <MessageSquare size={18} /> Messagerie
          </Link>
          <Link href="/profil" className="flex items-center gap-1 hover:text-green-700">
            <User size={18} /> Mon profil
          </Link>
        </nav>
      </header>

      <main className="px-4 py-6">{children}</main>
    </div>
  );
}
