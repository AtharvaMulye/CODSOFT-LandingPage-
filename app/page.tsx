import HeroPage from "@/components/hero";
import Navigation from "./navigation/Nav";
import ServiceSection from "@/components/services";
import TestimonialSection from "@/components/testimonials";
import TeamSection from "@/components/teamSection";
import NewsletterSection from "@/components/newsLetter";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div id="home" className="h-screen">
      <HeroPage />
      </div>
      <div id="services" className="mt-[7rem]">
      <ServiceSection />
      </div>
      <div className="flex w-80% px-[2rem]" id="test">
        <TestimonialSection />
      </div>
      <div className="flex px-[1.1rem] justify-center items-center" id="team">
        <TeamSection />
      </div>
      <div className="flex justify-center items-center px-2" id="contact">
      <NewsletterSection/>
      </div>
      <div className="flex self-center px-8 sm:px-[5rem] ">
      <FooterSection/>
      </div>
    </>
  );
}
