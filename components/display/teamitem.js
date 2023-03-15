import Image from "next/image";

export default function TeamItem() {
  return (
    <>
      <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
        <h2 className="text-center font-bold text-5xl">Our experienced team</h2>
        
        <Image
            src="/images/misc/groupphoto.jpg"
            alt=""
            className="w-full mx-auto pt-16 px-16"
            width={1080}
            height={720}
          />
      </section>
    </>
  );
}
