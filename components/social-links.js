import Image from "next/image";

export default function SocialLinks({ URL, icon, alt }) {
  return (
    <a href={URL}>
      <Image src={icon} alt={alt} className="h-8" width={30} height={30}/>
    </a>
  );
}
