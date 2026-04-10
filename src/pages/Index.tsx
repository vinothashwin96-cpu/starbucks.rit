import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDrinks from "@/components/FeaturedDrinks";
import RewardsBanner from "@/components/RewardsBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedDrinks />
      <RewardsBanner />
      <Footer />
    </div>
  );
};

export default Index;
