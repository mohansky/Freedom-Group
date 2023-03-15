import React from "react";
import Image from "next/image";
import MenuItems from "../data/menu.json";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="sticky top-0 mx-auto p-6 bg-slate-400 z-50">
        <div className="container flex items-center justify-between">
          <div className="pt-2">
            <Image src="/vercel.svg" alt="" width={100} height={50} />
          </div>
          <div className="hidden md:flex space-x-6">
            {MenuItems.map((item, index) => (
              <Link
                className="uppercase text-gray-700 font-semibold hover:text-gray-500 hover:font-medium "
                key={index}
                href={item.url}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
