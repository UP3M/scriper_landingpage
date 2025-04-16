import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Benefits from "@/components/sections/benefits";
import Collaboration from "@/components/sections/collaboration";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
// import Roadmap from "@/components/sections/roadmap";
import Services from "@/components/sections/services";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";

export default function Home() {
  const videoSchema = {
    "@context": "https://schema.org", 
    "@type": "VideoObject", 
    "name": "Scriper Introduction", 
    "description": "This video showcases the key features and capabilities of Scriper.", 
    "thumbnailUrl": "/thumbnail.png", 
    "uploadDate": "2023-02-22", 
    "duration": "PT1M28S", 
    "contentUrl": "https://www.youtube.com/embed/WlQ1pKIB14k"
  };

  const schemaScript = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(videoSchema),
      }}
    />
  );

  return (
    <main>
      <div className={cn("overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]")}>
        <Navbar />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        {/* <Roadmap /> */}
        <Footer />
      </div>
      {schemaScript}
      <ButtonGradient />
    </main>
  );
}
