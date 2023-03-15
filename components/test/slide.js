import Image from "next/image";

export default function Slide({ picture, name, email, address, about }) {
  return (
    <>
      {/* <div className="relative"> */}
      {/* <div className="absolute bottom-0 left-0 bg-slate600 opacity-10 min-h-full w-full z-40 bg-cover"> s </div> */}
      <Image src={picture} alt="" width={1080} height={480} className=" bg-cover z-30"/>
        
      <h3 className=" absolute text-3xl font-extrabold pb-3 z-50">{name}ss</h3>
      {/* </div> */}
    </>
  );
}
