import HeroSection from '@/components/heroSection';
import FeaturedCars from '@/app/featured-cars/page';
import SubNav from '@/components/subNav';
import Navbar from '@/components/navbar';

import Footer from '@/components/footer';
const HomePage: React.FC = () => {
  return (
    <div>
         <Navbar />
         <SubNav />
      <HeroSection />
      <FeaturedCars /> 
      <Footer />
   
    </div>
  );
};

export default HomePage;
