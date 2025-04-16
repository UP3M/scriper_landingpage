"use client";

import React, { useRef } from "react";
import Section from "../../layout/section";
import Button from "../../atoms/button";
import { BackgroundCircles, BottomLine, Gradient } from "../../design/hero";
import CompanyLogos from "./company-logos";
import { images } from "@/constants";


type Props = {};

const Hero = (props: Props) => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-48"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-16 max-w-[62rem] text-center md:mb-20 lg:mb-24">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;Generative AI&nbsp; with
            <span className="relative inline-block">
              Scriper
              <img
                src={images.curve}
                alt="Decorative curve under the name Scriper"
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}                
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of Generative AI within Scriper. Upgrade your
            productivity with Scriper, the content creation assistant.
          </p>
          <Button href="#pricing" white>
            Get Started
          </Button>
        </div>

        <div className="mx-auto relative max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="relative z-1 rounded-2xl p-0.5 bg-conic-gradient">
            <div className="relative rounded-2xl bg-n-8">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="relative flex w-full items-start justify-center">
              <iframe width="660" height="372" src="https://www.youtube.com/embed/WlQ1pKIB14k?si=aTbr3qT-uixdQdFl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
              </div>
              
              <div><Gradient /></div>
            </div>
          </div>
          <div className="absolute left-1/2 top-[-54%] w-[234%] -translate-x-1/2 md:top-[-46%] md:w-[138%] lg:top-[-104%]">
            <img
              src={images.heroBackground}
              className="w-full"
              width={1440}
              height={1880}
              alt="Background of the hero section with geometric figures"
            />
                </div>
          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>

        <CompanyLogos className="relative z-10 mt-20 hidden lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;

