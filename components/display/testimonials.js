import React from "react";
import Image from "next/image";
import TestimonialItem from "@display/testimonial-item";
import TestimonialsList from "@data/testimonials.json";
import SliderCarousel from "@display/carousel";

export default function Testimonials() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
      <h3 className="text-3xl font-bold text-center my-8">
        Our patients&apos; experience
      </h3>

      <SliderCarousel>
        {TestimonialsList.map((testimonial, index) => (
          <TestimonialItem key={index} testimonial={testimonial} />
        ))}
      </SliderCarousel>
    </section>
  );
}
