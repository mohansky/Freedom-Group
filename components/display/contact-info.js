import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ContactInfo() {
  return (
    <>
      <div className="w-full text-center">
        {/* <h5 className="uppercase tracking-wider font-semibold text-3xl text-fgprimary ">Get in touch</h5> */}
        <ul className="mx-auto grid md:grid-cols-3 gap-6 mt-8">
          <li className="bg-slate-50 w-3/4 md:w-full mx-auto rounded-lg shadow-lg p-6  ">
            <Icon
              icon="ph:map-pin-duotone"
              className="w-12 h-12 mx-auto text-fgsecondary"
            />
            <h4 className="my-3 text-3xl">Address</h4>
            <p className="md:text-normal lg:text-lg">
              #336 A, Chandreshwar Road <br />
              Rishikesh Dehradun <br />
              Uttarakhand-249201
            </p>
          </li>
          <li className="group bg-slate-50 w-3/4 md:w-full mx-auto rounded-lg shadow-lg p-6  ">
            <Icon
              icon="ph:phone-duotone"
              className="w-12 h-12 mx-auto text-fgsecondary"
            />
            <h4 className="my-3 text-3xl">Call Us</h4>
            <a
              href="telto:+916395515553"
              className="md:text-normal lg:text-lg group-hover:text-fgprimary ease-in-out duration-500 cursor-pointer"
            >
              +91 639 551 5553
            </a>
          </li>
          <li className="group bg-slate-50 w-3/4 md:w-full mx-auto rounded-lg shadow-lg p-6 ">
            <Icon
              icon="ph:envelope-duotone"
              className="w-12 h-12 mx-auto text-fgsecondary"
            />
            <h4 className="my-3 text-3xl">Mail Us</h4>
            <a
              href="mailto:freedomgrouprishikesh@gmail.com"
              className="md:text-normal lg:text-lg group-hover:text-fgprimary ease-in-out duration-500 cursor-pointer break-words"
            >
              freedomgrouprishikesh@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
