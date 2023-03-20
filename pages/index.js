import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Hero from "@display/hero";
import About from "@display/about";
import SliderCarousel from "@display/carousel";
import HeroListItems from "@data/hero.json";
import { sortByWeight } from "../utils";
import ContactInfo from "@display/contact-info";
import WhatWeDo from "@display/what-we-do";
import WWDCard from "@display/wwd-card";

export default function Home({ posts }) {
  const WWDList = posts.filter(
    (post) => !post.frontmatter.draft
  ); 
  return (
    <>
      <Head>
        <title>Freedom Group Rishikesh</title>
        <meta
          name="description"
          content="Freedom Group was created by Ajay Das and a group of school friends in 2017 who shared a strong inclination to Serve."
        />
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>

      <main>
        <SliderCarousel>
          {HeroListItems.map((item, index) => (
            <Hero key={index} item={item} />
          ))}
        </SliderCarousel>

        <About />

        <section className="relative bg-gray-100 bg-repeat px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
          {/* <WhatWeDo /> */}
          <div className="md:flex md:flex-wrap mt-6 mb-12 text-center md:-mx-4 ">
            {WWDList.map((post, index) => (
              <WWDCard key={index} post={post} />
            ))}
          </div>
        </section>

        <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
          <ContactInfo />
        </section>
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
      posts: posts.sort(sortByWeight).filter((post) => !post.frontmatter.draft),  
    },
  };
}
