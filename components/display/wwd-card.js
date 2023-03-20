import Image from "next/image";
import Link from "next/link";
import ButtonSmall from "@ui/button-small";

export default function WWDCard({ post }) {
  return (
    <>
      <div className="md:px-2 lg:px-4  md:w-1/2 lg:w-2/6 mb-8"> 
        <div className="bg-white rounded-lg border border-gray-300 p-4 shadow-md hover:shadow-lg">
          <Image
            src={post.frontmatter.img}
            alt={post.frontmatter.title}
            className="mx-auto"
            width={360}
            height={240}
          />

          <h4 className="text-xl font-bold line-clamp-1 mt-4">{post.frontmatter.title}</h4>
          <p className="mt-1 text-left text-slate-800 md:line-clamp-2">{post.frontmatter.description}</p>
          <Link href={`/what-we-do/${post.slug}`} className="block mt-4">
            <ButtonSmall>
            Read More
            </ButtonSmall>

          </Link>
        </div>
      </div>
    </>
  );
}
