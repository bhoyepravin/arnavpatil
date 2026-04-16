import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProgramsSection from "@/components/home/ProgramsSection";
import ClientsStrip from "@/components/home/ClientsStrip";
import WhySection from "@/components/home/WhySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import EventsPreview from "@/components/home/EventsPreview";
import MediaStrip from "@/components/home/MediaStrip";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";
import { buildMetadata } from "@/utils/seoConfig";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import SocialPresence from "@/components/home/SocialPresence";
import ClientsSection from "@/components/home/ClientsSection";
import ContactSection from "@/components/home/ContactSection";
import AboutCoachSection from "@/components/home/AboutCoachSection";
import FreeHelpSection from "@/components/home/FreeHelpSection";
import FeaturedInSection from "@/components/home/FeaturedInSection";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — dark, bold, full screen */}
      <HeroSection />

      <StatsSection/>

      {/* 2. Programs — filterable course cards (like rahulmalodia's Courses section) */}
      <ProgramsSection />

      {/* 3. About — dark section, personal brand */}
      {/* <AboutPreview /> */}
      <Testimonials/>

      {/* 4. Clients strip — infinite scroll logos */}
      <ClientsStrip />

      <SocialPresence/>

      <ClientsSection/>

      <FeaturedInSection/>

      <ContactSection/>

      <AboutCoachSection/>

      {/* 5. Why choose — value propositions */}
      <WhySection />

      {/* 6. Testimonials — infinite marquee carousel */}
      <TestimonialsSection />

      {/* 7. Events preview */}
      <EventsPreview />

      {/* 8. Media / Featured In — dark strip */}
      {/* <MediaStrip /> */}

      {/* 9. Blog */}
      <BlogPreview />

      <FreeHelpSection/>

      {/* 10. CTA */}
      {/* <CTASection /> */}
    </>
  );
}
