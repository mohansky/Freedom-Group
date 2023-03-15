import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import PageTitle from "@display/page-title";
import { sortByWeight } from "../../utils";
import WWDCard from "@display/wwd-card";

export default function Treatments({ posts }) {
  return (
    <>
      <Head>
        <title>The Sapphire Clinics</title>
        <meta
          name="description"
          content="Welcome to the Skin Clinic of Dr. Sheela Natraj."
        />
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>

      <main>
        <div className="mx-auto max-w-7xl min-h-screen my-10 px-2 sm:px-6 lg:px-8">
          <PageTitle> What We Do </PageTitle>
          <div className="mt-8">
            <h2 className="text-3xl leading-tight font-bold">What We do</h2>
            <p className="text-gray-600 mt-2 mb-8 md:max-w-lg">
              Some of the programs that we organise.
            </p>
          </div>

          <div className="md:flex md:flex-wrap mt-6 mb-12 text-center md:-mx-4 ">
            {posts.map((post, index) => (
              <WWDCard key={index} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByWeight),
    },
  };
}
