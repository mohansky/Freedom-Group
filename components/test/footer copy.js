import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";
import MenuItems from "../data/menu.json";
import SocialMediaLinks from "../data/social-links.json";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-700 py-5">
        {/* <!-- Flex Container --> */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* <!-- Logo and social links container --> */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* <!-- Logo --> */}
            <div>
              <Image
                src="/vercel.svg"
                className="h-8"
                alt=""
                width={150}
                height={150}
              />
            </div>
            {/* <!-- Social Links Container --> */}
            <div className="flex justify-center space-x-4">
              {SocialMediaLinks.map((item, index) => (
                <SocialLinks
                  key={index}
                  URL={item.URL}
                  icon={item.icon}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
          {/* <!-- List Container --> */}

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              {MenuItems.map((item, index) => (
                <Link
                  key={index}
                  className="hover:text-brightRed"
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* <!-- Input Container --> */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-800 focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
