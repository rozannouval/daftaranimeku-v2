'use client'

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Top Anime", href: "/top-anime" },
  { name: "Up Comming", href: "/up-comming" },
];

const Navbar = () => {  
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed text-primary w-full p-4">
      <div className="flex justify-between items-center max-w-360 m-auto">
        <Link href={"/"} className="font-cabin font-semibold text-2xl">
          DaftarAnimeKu V2
        </Link>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
