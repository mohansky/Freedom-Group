import Head from "next/head";
import PageTitle from "@display/page-title";
import Container from "@layout/container";
import SupportGrid from "@display/support-grid";
import SupportCard from "@display/support-card";
import SupportList from "@data/support.json";

export default function Support() {
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
        <Container>
          <PageTitle> Support Us </PageTitle>
          <div className="md:w-3/4 lg:w-3/4 mx-auto">  
          <p className="text-center leading-relaxed text-slate-800">
          Your smallest contribution makes a big difference to children’s lives. <br/>
          We count on the generosity of people like you to be able to create real change for India’s children! <br/>
          Thank you so much for supporting us.</p>
          </div>
          <div className="my-16">
            <div>
              {SupportList.map((support, index) => (
                <SupportCard key={index} support={support} />
              ))}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
