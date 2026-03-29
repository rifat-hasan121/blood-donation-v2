import Hero from "./components/hero";
import WhyDonate from "./components/why-donate";
import DonationProcess from "./components/donation-process";
import CampaignGallery from "./components/campaign-gallery";
import Testimonials from "./components/testimonials";
import BlogSection from "./components/blog-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 pb-20">
      <Hero />
      <WhyDonate />
      <DonationProcess />
      <CampaignGallery />
      <Testimonials />
      <BlogSection />
    </main>
  );
}
