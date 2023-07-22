import * as React from 'react';
import HeroSection from './sections/HeroSection';
import FeatureSection from './sections/FeatureSection';
import HowItWorksSection from './sections/HowItWorksSection';
import FormModal from '@/components/LandingPage/FormModal';
import CallToAction from './sections/CallToAction';
import Footer from './sections/Footer';
import 'aos/dist/aos.css';
import Header from '@/components/Header';


const LandingPageBuyer = () => {
  const [language] = React.useState(true);
  const [showModal, toggleModalVisibility] = React.useState(false);

  // const toggleLang = () => {
  //   setlanguage(prevState => !prevState);
  // };
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex flex-col mx-auto justify-center max-w-5xl">
        <HeroSection
          title="Quality manufacturing companies in Mexico, just a click away"
          subtitle="Say goodbye to uncertainty in your manufacturing process. Our online marketplace connects you with quality manufacturing companies in Mexico, complete with reliable information, secure transactions, and exceptional customer service"
          buttonText="Start sourcing today"
          onClick={() => toggleModalVisibility(!showModal)}
        />
        <FeatureSection lang={language} />
      </div>
      <HowItWorksSection
        lang={language}
        title="How it works"
        subtitle="Puentify makes finding quality suppliers so effortless, you can finally relax with a siesta and leave the work to us"
      />
      <CallToAction lang={language} />

      <Footer lang={language} />
      <FormModal isOpen={showModal} setIsOpen={toggleModalVisibility} />
    </div>
  );
};

export default LandingPageBuyer;
