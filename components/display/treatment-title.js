import Button from "@ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TreatmentTitle({ post }) {
  return (
    <>
      <li className="mb-2">
         {post.frontmatter.title} 
      </li>
    </>
  );
}
