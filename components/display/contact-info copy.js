import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ContactInfo() {
  return (
    <>
      <div className="w-full lg:w-4/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
        <h5 className="uppercase tracking-wider font-semibold text-fgprimary">
          {/* Contact Details */}
        </h5>
        <ul className="mt-4 mx-auto">
          <li className="mt-4 cursor-text flex">
            <span>
              <Icon icon="mdi:map-marker-outline" className="w-6 h-6 cursor-default" />
            </span>
            <span className="ml-3">
              336 A, Chandreshwar Road <br />
              Rishikesh Dehradun <br />
              Uttarakhand-249201
            </span>
          </li>

          <li className="mt-8 hover:text-fgprimary ease-in-out duration-500 cursor-pointer">
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
 
          <li className="mt-8 hover:text-fgprimary ease-in-out duration-500 cursor-pointer">
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
        <h5 className="mt-12 uppercase tracking-wider font-semibold text-fgprimary">
          Follow us on Social media
        </h5>
        <ul className="flex mt-4  text-black">
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
      </div>
    </>
  );
}
