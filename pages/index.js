import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Hero from "@display/hero";
import About from "@display/about";
import SliderCarousel from "@display/carousel";
import HeroListItems from "@data/hero.json";
import { sortByWeight } from "../utils";
import WWDCard from "@display/wwd-card";
import WWDGrid from "@display/wwd-grid";
import ContactInfo from "@display/contact-info";
import Form from "@display/form";
import SectionTitle from "@display/section-title";

export default function Home({ posts }) {
  const WWDList = posts.filter((post) => !post.frontmatter.draft);
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

        <section
          id="about-us"
          className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32"
        > 
          <About />
        </section>

        <section
          id="what-we-do"
          className="relative bg-fgprimarybg px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32"
        >
          <SectionTitle>What we do</SectionTitle>
          <WWDGrid>
            {WWDList.map((post, index) => (
              <WWDCard key={index} post={post} />
            ))}
          </WWDGrid>
        </section>

        <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
          <SectionTitle>Get in touch</SectionTitle>
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
