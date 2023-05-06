import * as React from 'react';
import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import FeatureSection from './sections/FeatureSection'
import HowItWorksSection from './sections/HowItWorksSection'
import FeaturesSpotlights from './sections/FeaturesSpotlights'
import IntelligenceSection from './sections/IntelligenceSection'
import WhyUs from './sections/WhyUs'
import Testimonials from './sections/Testimonials'
import CallToAction from './sections/CallToAction'
import Footer from './sections/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "@/components/Header";
import FormModal from "@/components/LandingPage/FormModal";


const LandingPageBuyer = () => {
  const [language, setlanguage] = React.useState(true);
  const [showModal, toggleModalVisibility] = React.useState(false);

  const toggleLang = () => {
    setlanguage(prevState => !prevState)
  }
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex flex-col mx-auto justify-center max-w-5xl">
        <HeroSection lang={language} onClick={() => toggleModalVisibility(!showModal)} />
        <FeatureSection lang={language} />
      </div>
        <HowItWorksSection lang={language} />
        <CallToAction lang={language} />

      <Footer lang={language} />
    </div>
  );
};

export default LandingPageBuyer;
