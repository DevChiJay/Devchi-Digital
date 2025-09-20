import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio - Devchi Digital",
  description: "Meet the founder and lead developer behind Devchi Digital. Explore skills, experience, and journey in web development, mobile apps, and digital solutions.",
};

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <PortfolioSection />
      <Footer />
    </main>
  );
}
