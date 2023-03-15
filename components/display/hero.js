import Button from "@ui/button";
import ButtonOutline from "@ui/button-outline";
import Image from "next/image";
import Link from "next/link"; 

export default function Hero({ item }) {
  return (
    <>
      <div className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-48 overflow-hidden flex items-center min-h-screen">
        <div className="w-full h-full absolute top-0 left-0 z-40 bg-black opacity-20 "></div>
        <div className="w-full h-full absolute top-0 left-0 z-0 bg-top">
          <Image
            src={item.img}
            alt=''
            width={1920}
            height={1080}
            className="w-full h-full object-cover "
          />
        </div>

        <div className="lg:w-3/4 xl:w-3/4 relative z-50 h-100 lg:mt-16">
          <div>
            <h1 className="text-white text-5xl md:text-7xl xl:text-8xl font-light leading-tight">
              {item.title}
            </h1>
            <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4 ">
              {item.subtitle}
            </p>
            {/* <Link href={item.btnUrl}>
              <ButtonOutline>
              {item.btnText}
              </ButtonOutline> 
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
