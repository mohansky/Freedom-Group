import Image from "next/image";

export default function SupportCard({ support }) {
  return (
    <div className= "w-3/4 md:w-full mx-auto">
      {/* <Image
        className="mx-auto"
        src={support.img}
        alt={support.title}
        width={100}
        height={100}
      /> */}
      <h4 className="my-3 text-3xl text-center">{support.title}</h4>
      <ul className="leading-relaxed text-slate-800 text-center ">
        {support.text.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
