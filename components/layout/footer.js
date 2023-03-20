import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-900 text-white 
      px-4 
      sm:px-8 
      lg:px-16 
      xl:px-40 
      2xl:px-64 
      pt-4
      lg:pt-8
      "> 
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-2/6 lg:mx-4 lg:pr-8">
            <Image
              src="/images/fglogo.svg"
              alt=""
              className="mb-4"
              width={300}
              height={300}
            />
          </div>

          <div className="w-full lg:w-3/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
            <h5 className="uppercase tracking-wider font-semibold text-gray-500">
              Contact Details
            </h5>
            <ul className="mt-4">
              <li className="mt-4 cursor-text flex ">
                <span>
                  <Icon icon="mdi:map-marker-outline" className="w-6 h-6 cursor-default" />
                </span>
                <span className="ml-3">
                  336 A, Chandreshwar Road <br />
                  Rishikesh Dehradun <br />
                  Uttarakhand-249201
                </span>
              </li>
              <li className="mt-4 hover:text-fgprimary ease-in-out duration-500 cursor-pointer">
                <a
                  href="telto:+916395515553"
                  title=""
                  className="flex items-center"
                >
                  <span>
                    <Icon icon="mdi:phone-outline" className="w-6 h-6" />
                  </span>
                  <span className="ml-3">+91 639 551 5553</span>
                </a>
              </li>
              <li className="mt-4 hover:text-fgprimary ease-in-out duration-500 cursor-pointer">
                <a
                  href="mailto:freedomgrouprishikesh@gmail.com"
                  title=""
                  className="flex items-center"
                >
                  <span>
                    <Icon icon="mdi:email-outline" className="w-6 h-6" />
                  </span>
                  <span className="ml-3">freedomgrouprishikesh@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

        
           <div className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4">
            <h5 className="uppercase tracking-wider font-semibold text-gray-500">
            Follow us on Social media
            </h5>
            <ul className="flex mt-4  text-white">
              <li>
                <Link href="#" target="_blank" title="">
                  <Icon
                    icon="mdi:facebook"
                    className="w-10 h-10 hover:text-fgprimary ease-in-out duration-500 cursor-pointer"
                  />
                </Link>
              </li>

              <li className="ml-6">
                <Link href="#" target="_blank" title="">
                  <Icon
                    icon="mdi:instagram"
                    className="w-10 h-10 hover:text-fgprimary ease-in-out duration-500 cursor-pointer"
                  />
                </Link>
              </li>
            </ul>

            <h5 className="uppercase tracking-wider font-semibold text-gray-500 mt-8">
           Registered under
            </h5>
            <ul className="flex mt-4  text-white">
              <li> 
                    Reg. Uk0600882021006607 
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-4 lg:pt-4 pb-3">
          <hr className="pb-3 border-t-1 border-gray-600" />
          <div className="flex justify-between">
            <p className="text-sm text-gray-600 ">
              © {new Date().getFullYear()} Freedom Group Rishikesh. All Rights
              Reserved.
            </p>
            <p className="text-sm text-gray-600 ">Developed by Mohan</p>
          </div>
        </div>
      </footer>
    </>
  );
}
