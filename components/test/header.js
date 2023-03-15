import React, { useState } from "react";
import Image from "next/image";
import MenuItems from "@data/menu.json";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="sticky top-0 mx-auto p-6 bg-slate-400 z-50">
        <div className="container hidden md:flex items-center justify-between">
          <div className="pt-2">
            <Image src="/vercel.svg" alt="" width={100} height={50} />
          </div>

          <ul className="hidden md:flex space-x-6">
            {MenuItems.map((item, index) => (
              <li key={index}>
                <Link
                  className="uppercase text-gray-700 font-semibold hover:text-gray-500 hover:font-medium "
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

     
          <button onClick={handleNav} className="flex md:hidden fixed top-2 right-10 z-50">
            {!nav ? (
              <Icon icon="ic:round-menu" width="35" />
            ) : (
              <Icon icon="ic:round-close" width="35" />
            )}
          </button>
          <div className={!nav ? "hidden transition ease-in-out delay-300" : "block md:hiden pt-10"}>
          <div className="pt-2">
            <Image src="/vercel.svg" alt="" width={100} height={50} />
          </div>
          <ul className="p-1">
            {MenuItems.map((item, index) => (
              <li key={index} className="py-5 border-b-2 border-gray-500 text-end">
                <Link
                  className="uppercase text-gray-700 font-semibold hover:text-gray-500 hover:font-medium "
                  href={item.url}
                  onClick={handleNav}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
