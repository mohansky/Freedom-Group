import Button from "@ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TreatCard({ post }) {
  return (
    <>
       
        <div className="bg-white rounded border border-gray-300 shadow-md">
          <div className="w-full h-48 overflow-hidden bg-gray-300">
            <Image src={post.frontmatter.img} alt="" width={360} height={240} />
          </div>
          <div className="p-4">
            <p className="text-lg font-semibold leading-tight mt-4">
              {post.frontmatter.title}
            </p>
            <p className="text-gray-600 mt-1">{post.frontmatter.subtitle}</p>
            <div className="flex items-center mt-4"></div>
            <Button>
              <Link href={`/treatments/${post.slug}`}>Read More</Link>
            </Button>
          </div>
        </div>
     
    </>
  );
}
