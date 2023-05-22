import React, { useState } from "react";
import Head from "next/head";
import ImageMosaic from "@gallery/image-mosaic";
import ImageLightbox from "@gallery/image-lightbox";
import PageTitle from "@display/page-title";
import GalleryCollection from "@data/gallery.json";
import Container from "@layout/container";
import SectionTitle from "@display/section-title";

if (typeof window === "undefined") React.useLayoutEffect = () => {};

export default function Gallery({ galleryCollection }) {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const images = GalleryCollection;

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
          <PageTitle> Gallery </PageTitle>

          <section>
            <ImageMosaic
              images={images.map((image) => ({
                src: image.img,
                title: image.title,
                width: image.width,
                height: image.height,
              }))}
              handleClick={(e, { index }) => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />

            <ImageLightbox
              currentImageIndex={currentImageIndex}
              setCurrentIndex={setCurrentIndex}
              isOpen={isOpen}
              onClose={() => setOpen(false)}
              images={images.map((image) => ({
                src: image.img,
                title: image.title,
              }))}
            />
          </section>
        </Container>
      </main>
    </>
  );
}
