import Image from "next/image"; 

export default function SupportCard({support}) {
  return (
    <div className="bg-slate-50 w-3/4 md:w-full mx-auto rounded-lg shadow-lg px-5 py-10"> 
      <Image className="mx-auto" src={support.img} alt={support.title} width={100} height={100} />
      <h4 className="my-3 text-3xl text-center">{support.title}</h4>
      <p className=" text-center md:text-normal lg:text-lg">{support.text}</p>
    </div>
  );
}
