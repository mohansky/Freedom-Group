import Image from "next/image";
import Link from "next/link";
import Button from "@ui/button";

export default function TestimonialItem({ testimonial }) {
  return (
    <>
      <div className="bg-no-repeat bg-cover bg-center h-80 md:h-96 px-24 p-6 mb-6 grid md:grid-cols-3 gap-8" 
      style={{ backgroundImage: "url(" + "/images/wave-pattern.svg" + ")",}}>
        <div className="hidden md:flex items-center md:col-span-1 ">
          <Image
            className="mx-auto w-32 h-32"
            src={testimonial.image}
            alt={testimonial.treatment}
            width={150}
            height={150}
          />
        </div>

        <div className="col-span-2 flex items-center">
          <div>
            <p className="mb-4 text-lg">{testimonial.text}</p>
            <p className="mb-2 text-slate-600 italic">{testimonial.treatment}</p>
            <p className="text-xl font-semibold">{testimonial.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
