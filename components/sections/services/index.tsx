"use client";

import React, { useState } from "react";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import { brainwaveServices, brainwaveServicesIcons, images } from "@/constants";
import Image from "next/image";
import Generating from "../../atoms/generating";
import {
  // PhotoChatMessage,
  // VideoBar,
  // VideoChatMessage,
  Gradient,
} from "@/components/design/services";
import { cn } from "@/lib/utils";

type Props = {};

const Services = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState<number>(2);

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Scriper unlocks the potential of AI-powered applications"
          />

        <div className="relative">
          <div className="relative z-1 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 mb-5 p-8 lg:p-20 xl:h-[46rem]">
            <div className="pointer-events-none absolute left-0 top-0 h-full md:w-3/5 xl:w-auto">
              <Image
                src={images.service1}                
                alt="Illustration of the Scriper AI, representing a Smart AI."
                width={800}
                height={730}
                className="size-full object-cover md:object-right"
              />
            </div>

            <div className="relative z-1 ml-auto max-w-[17rem]">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-12 text-n-3">
                Scriper unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((service, index) => (
                  <li key={index} className="flex items-start border-t border-n-6 py-4">
                    <Image src={images.check} alt="Green check symbol indicating a service feature" width={24} height={24} />                    
                    <p className="ml-4">{service}</p>
                  </li>
                ))}
              </ul>
              
            </div>
            <Generating className="absolute inset-x-4 bottom-4 border border-n-1/10 lg:bottom-8 lg:left-1/2 lg:right-auto lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[30rem] overflow-hidden rounded-3xl border border-n-1/10">
            <div className="px-4 py-12 xl:px-8">
                <h4 className="h4 mb-4">Photo Editing</h4>
                <p className="body-2 mb-8 text-n-3">
                Automatically enhance your photos using our AI app&apos;s photo editing feature.
                  Try it now!
                </p>
              </div>
              <div className="relative h-40 overflow-hidden rounded-xl bg-n-8 md:h-[25rem]">
                <Image
                  src={"/assets/image_enh.jpg"}
                  width={660}
                  height={550}
                  alt="Photo editing using AI"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-[40rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="h4 mb-4">Video Generation</h4>
                <p className="body-2 mb-8 text-n-3">
                  The world’s most powerful AI photo and video art generation engine. What will you
                  create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedItem(index)}
                      className={cn("flex h-10 w-10 cursor-pointer items-center justify-center rounded-2xl bg-n-6 md:h-15 md:w-15",
                         index === selectedItem && "h-[3rem] w-[3rem] bg-conic-gradient p-0.25 md:h-[4.5rem] md:w-[4.5rem]"                      
                        
                        )}
                      >
                      <div
                        
                        className={cn(
                          index === selectedItem &&
                            "flex size-full items-center justify-center rounded-2xl bg-n-7"
                        )}
                      >
                        <Image src={item} alt="Brainwave service icon" width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-40 overflow-hidden rounded-xl bg-n-8 md:h-[25rem]">
                <iframe width="660" height="372" src="https://www.youtube.com/embed/WlQ1pKIB14k?si=aTbr3qT-uixdQdFl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading='lazy'></iframe>
              </div>
            </div>
            <Gradient />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
