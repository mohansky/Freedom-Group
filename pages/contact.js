import Head from "next/head";
import Form from "../components/display/form";
import PageTitle from "@display/page-title";
import ContactInfo from "@display/contact-info";
import Container from "@layout/container";

export default function Contact() {
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
          <PageTitle> Contact </PageTitle>
          <div className="mb-5">
            <ContactInfo />
          </div>
        </Container>
        <section className="py-20 px-5 bg-fgprimarybg">
          <div className="my-20 mx-auto w-full md:w-3/4 lg:w-2/4">
            <Form />
          </div>
        </section>

        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.5216162210054!2d78.30223285060838!3d30.10788418177021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909161af640e745%3A0x182918b007f819a!2sChandreshwar%20Mandir%20Marg%2C%20Chandreshwar%20Nagar%2C%20Rishikesh%2C%20Uttarakhand%20249201!5e0!3m2!1sen!2sin!4v1678775663457!5m2!1sen!2sin"
            width="100%"
            height="640"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
    </>
  );
}
