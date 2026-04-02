import Hero from "./components/hero";
import WhyDonate from "./components/why-donate";
import DonationProcess from "./components/donation-process";
import CampaignGallery from "./components/campaign-gallery";
import Testimonials from "./components/testimonials";
import BlogSection from "./components/blog-section";
import JoinUs from "./components/join-us";
import Sponsors from "./components/sponsors";
import MiniAbout from "./components/mini-about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <Hero />
      <WhyDonate />
      <DonationProcess />
      <CampaignGallery />
      <JoinUs />
      <Sponsors />
      <Testimonials />
      <BlogSection />
      <MiniAbout />
      <Footer />
    </main>
  );
}
