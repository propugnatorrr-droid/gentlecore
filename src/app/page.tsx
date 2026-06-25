import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IconicCollections from "@/components/IconicCollections";
import LoveStorySection from "@/components/LoveStorySection";
import WatchesShowcase from "@/components/WatchesShowcase";
import EditorialGrid from "@/components/EditorialGrid";
import BoutiqueLocator from "@/components/BoutiqueLocator";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <IconicCollections />
        <LoveStorySection />
        <WatchesShowcase />
        <EditorialGrid />
        <BoutiqueLocator />
        <NewsletterSignup />
      </main>
      <Footer />
      <ChatBubble />
    </>
  );
}
