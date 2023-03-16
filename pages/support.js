import Head from "next/head";
import Form from "../components/display/form";
import PageTitle from "@display/page-title";
import ContactInfo from "@display/contact-info";

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
        <div className="mx-auto max-w-7xl min-h-screen my-10 px-2 sm:px-6 lg:px-8">
          <PageTitle> Support Us </PageTitle>
          {/* <div className="grid md:grid-cols-2 gap-4 mb-5">
            <ContactInfo />
            <Form />
          </div> */}
          <div className="my-16">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
          </div>
        </div>
      </main>
    </>
  );
}
