import Image from "next/image";

export default function Card({post}) {
  return (
    <>
      <div className="bg-slate-200 rounded-lg drop-shadow-md w-1/3 p-6">
        <h3 className="text-center text-3xl font-extrabold pb-3">{post.frontmatter.title}</h3>
        <Image src={post.frontmatter.img} alt="" width={360} height={240} />
        <h5 className="text-center text-lg font-bold py-2">{post.frontmatter.subtitle}</h5>
        <p className="text-center">{post.frontmatter.description}</p>
      </div>
    </>
  );
}
