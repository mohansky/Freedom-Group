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
          <div className="py-5 grid md:grid-cols-2 gap-x-10 w-full h-fit">
            <p className="mb-5 indent-8 text-justify leading-relaxed text-slate-800">
              Freedom Group Foundation Society&apos;s flagship program Mission
              Education works with the objective of empowering underprivileged
              children by providing education, nutrition, and wellness support.
              The program is well aligned to the New Education Policy (2020),
              and the SDG Goal 4 (Ensure inclusive and equitable quality
              education and promote lifelong learning opportunities for all).
              Mission Education works with children (3-18 years) living in
              difficult circumstances, children from poor families, differently
              abled children, disaster-struck children, abandoned and street
              children, and children living in tribal belts, remote villages and
              hard to reach areas.{" "}
            </p>
            <p className="mb-5 indent-8 text-justify leading-relaxed text-slate-800">
              If we need to address healthcare, poverty, population control,
              unemployment and human rights, there&apos;s no better way to start
              than providing education to children in need. Education not only
              empowers children to have a secure future but also helps them grow
              up as responsible national and global citizens. The Right to
              Education (RTE) Act which came into force in 2010 made education
              free and compulsory for all children in the age group of 6-14
              years. But even a decade later, the learning curve has not been
              steady for many children in the country. The socio-economic
              conditions of parents and lack of proper learning in schools are
              hindrances which prevent many children from having education.
            </p>
          </div>
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
