import Image from "next/image";

export default function TeamCard({picture,
  name,
  email,
  address,
  about
}) {
  return (
    <>
      <div className="bg-slate-200 rounded-lg drop-shadow-md   p-6">
        <h3 className="text-center text-3xl font-extrabold pb-3">{name}</h3>
        <Image src={picture} alt="" width={360} height={240} />
        <h5 className="text-center text-lg font-bold py-2">{email}</h5>
        <p className="text-center">{about}</p>
        <p className="text-center">{address}</p>
      </div>
    </>
  );
}