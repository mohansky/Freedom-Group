import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react"; 
import MenuItems from "@data/menu.json";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full bg-amber-400 backdrop-blur fixed top-0 left-0 right-0 z-50">
        {/* <NavContact /> */}
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:block">
              <Link href="/">
                <Image
                  src="/images/fglogo.svg"
                  alt=""
                  className=""
                  width={100}
                  height={100}
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-none focus:bordborder-none ease-in-out duration-500"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Icon 
                      icon="ph:x" 
                      className="w-8 h-8 text-white ease-in-out duration-500 focus:border-none active:border-none" />
                  ) : (
                    <Icon
                      icon="ph:list"
                      className="w-8 h-8 text-white ease-in-out duration-500 focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                {MenuItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-white text-xl text-center font-semibold py-6 md:py-2 px-3 
                    border-b-2 md:border-b-0 border-blue-900 hover:bg-blue-600
                    hover:text-opacity-60 md:hover:bg-transparent ease-in-out duration-300"
                  >
                    {/* hover:decoration-white hover:underline hover:decoration-1 */}
                    <Link href={item.url} onClick={() => setNavbar(false)}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                {/* <li className="md:ml-6 mt-3 md:mt-0">
                <ButtonOutline>
                  <Link href="/contact">Book Appointment</Link>
                </ButtonOutline>
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
