import Head from "next/head";
import Form from "../components/display/form";
import PageTitle from "@display/page-title";
import ContactInfo from "@display/contact-info";
import Container from "@layout/container";

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
          <div className="my-16">you can support us by ...</div>
        </Container>
      </main>
    </>
  );
}
