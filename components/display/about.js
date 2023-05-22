import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full ">
          <div className="border-l border-fgsecondary pl-4">
            <h2 className="text-3xl leading-tight font-bold my-4">Our Story</h2>
            <p className="mt-2 text-justify leading-relaxed text-slate-800">
              In 2018 we found a government owned room and the selfless work
              developed for the children with Rangoli and Mehendi competitions,
              sports competitions, art camps and hindi english speech
              competitions with our volunteers. In 2020 after lockdown we
              started an Educational and Community Centre for local children
              with many creational and after school activities with tuition in
              English Hindi and Maths Science, social science and basic computer
              class, dance, games, and Yoga sessions with keen college going
              teachers.
            </p>
          </div>

          <div className="flex">
            <div className="w-48 bg-fgsecondary/50 my-8 grid place-content-center p-4">
            <Image
              className="mx-auto rounded-md"
              src="/images/favicon.png"
              width={100}
              height={100}
              alt="Ajay Das Freedom Group Founder"
            />
              {/* <p className="text-white text-3xl text-center">
                6 Years <br /> of Service
              </p> */}
            </div>
            <h2 className="text-3xl text-center grid place-content-center leading-tight font-bold my-4">
              Hands That Serve Are Holier Than That Pray 
            </h2>
          </div>

          <p className="mt-2 text-justify leading-relaxed text-slate-800 ">
            Currently 50 children attend our small centre daily. During the
            Pandemic, our centre was the base for many hundreds of Ration
            Distributions, which we delivered to widows, below poverty level
            families and jobless, which friends sponsored and also Blankets
            distributed to homeless stret dwellers in the winter months. This
            year, we realised that to expand our work it was time to make and
            register an offical Society which is Freedom Group Foundation
            Society.
          </p>
        </div>

        <div className="w-full order-first md:order-last">
          <div className="border-l border-fgsecondary pl-4">
            <h2 className="text-3xl leading-tight font-bold my-4">About Us</h2>
            <p className="mt-2 text-justify leading-relaxed text-slate-800">
              Freedom Group was created by Ajay Das and a group of school
              friends in 2017 who shared a strong inclination to Serve, and came
              together with local slum children to clean the Ghats of Holy River
              Ganga on a weekly basis.
            </p>
          </div>
          <div className="my-8">
            <Image
              className="mx-auto rounded-md"
              src="/images/fg-team.jpg"
              // src="/images/ajay-das.jpg"
              width={640}
              height={480}
              alt="Ajay Das Freedom Group Founder"
            />
          </div>
        </div>
      </div>
    </>
  );
}
