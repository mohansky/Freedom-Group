import Image from "next/image";
import PageTitle from "@display/page-title";

export default function About() {
  return (
    <>
      <section id="about-us" className="relative mb-12 px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-8">
        <PageTitle>About Us</PageTitle>
        <div className="md:w-4/6 mx-auto">
          {/* <div className="w-full lg:w-1/2 lg:px-8"> */}
            <h2 className="text-3xl text-center leading-tight font-bold my-4">
              &quot;Hands That Serve Are Holier Than That Pray&quot;
            </h2>
            <p className="mt-2 text-justify leading-relaxed text-slate-800">
              Freedom Group was created by Ajay Das and a group of school
              friends in 2017 who shared a strong inclination to Serve, and came
              together with local slum children to clean the Ghats of Holy River
              Ganga on a weekly basis. In 2018 we found a government owned room
              and the selfless work developed for the children with Rangoli and
              Mehendi competitions, sports competitions, art camps and hindi
              english speech competitions with our volunteers. In 2020 after
              lockdown we started an Educational and Community Centre for local
              children with many creational and after school activities with
              tuition in English Hindi and Maths Science, social science and
              basic computer class, dance, games, and Yoga sessions with keen
              college going teachers. Currently 50 children attend our small
              centre daily. During the Pandemic, our centre was the base for
              many hundreds of Ration Distributions, which we delivered to
              widows, below poverty level families and jobless, which friends
              sponsored and also Blankets distributed to homeless stret dwellers
              in the winter months. This year, we realised that to expand our
              work it was time to make and register an offical Society which is
              Freedom Group Foundation Society.
            </p>
            <div className="my-16">
              <Image className="mx-auto" src="/images/freedom-group.jpg" width={640} height={480} alt="" />
            </div>
          </div>

          {/* <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
            <div className="md:flex">
              <Image src="/images/freedom-group.jpg" width={480} height={480} alt="" />
            </div>
          </div> */}
        {/* </div> */}
      </section>
    </>
  );
}
