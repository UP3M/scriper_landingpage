"use client";

import React, { useRef } from "react";
import Section from "../../layout/section";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { images, heroIcons } from "@/constants";
import Button from "../../atoms/button";
import { BackgroundCircles, BottomLine, Gradient } from "../../design/hero";
// import { ScrollParallax } from "react-just-parallax";
// import Generating from "../../atoms/generating";
// import Notification from "./notification";
import CompanyLogos from "./company-logos";
// import VideoPlayer from "./result-vid"
import { images } from "@/constants";

type Props = {};

const Hero = (props: Props) => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className={cn("pt-[12rem] -mt-[5.25rem]")}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-16 max-w-[62rem] text-center md:mb-20 lg:mb-24">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;Generative AI&nbsp; with{" "}
            <span className="relative inline-block">
              Scriper
              <Image
                src={images.curve}
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className={cn("body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8")}>
            Unleash the power of Generative AI within Scriper. Upgrade your productivity with Scriper, the
            content creation assistant.
          </p>
          <Button href="#pricing" white>
            Get Started
          </Button>
        </div>

        <div className={cn("relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24")}>
          <div className={cn("relative z-1 rounded-2xl p-0.5 bg-conic-gradient")}>
            <div className={cn("relative bg-n-8 rounded-[1rem]")}>
              <div className={cn("h-[1.4rem] bg-n-10 rounded-t-[0.9rem]")} />
              
                <div className={cn("relative h-30 flex justify-center items-start")}> {/* Removed padding from here */}
                
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingBottom: '56.25%', // Maintain 16:9 aspect ratio
                    height: 0,
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/WlQ1pKIB14k?autoplay=1&mute=1"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    } as React.CSSProperties} // Type-safe style object
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                </div>

                {/* <Generating className="absolute inset-x-4 bottom-5 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute bottom-[7.5rem] left-[-5.5rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 p-1 backdrop-blur xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <Image src={icon} height={24} width={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="absolute bottom-44 right-[-5.5rem] hidden w-72 xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax> */}
            </div>

            <Gradient />
          </div>
          <div className="absolute left-1/2 top-[-54%] w-[234%] -translate-x-1/2 md:top-[-46%] md:w-[138%] lg:top-[-104%]">
            <Image
              src={images.heroBackground}
              width={1440}
              height={1880}
              className="w-full"
              alt="hero"
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
