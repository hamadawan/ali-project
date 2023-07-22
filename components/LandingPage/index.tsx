import * as React from 'react';
import HeroSection from './sections/HeroSection';
import HowItWorksSection from './sections/HowItWorksSection';
import CallToAction from './sections/CallToAction';
import Footer from './sections/Footer';
import 'aos/dist/aos.css';
import Header from '@/components/Header';


const LandingPageSeller = () => {
  const [language] = React.useState(true);
  const [showModal, toggleModalVisibility] = React.useState(false);

  // const toggleLang = () => {
  //   setlanguage(prevState => !prevState);
  // };
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex flex-col mx-auto justify-center max-w-5xl mt-[70px]">
        <HeroSection
          title="Conquista el mercado de Estados Unidos con Puentify"
          subtitle="Abre las puertas a un mundo de oportunidades y aumenta tus ventas en el mercado mas grande del mundo"
          buttonText="Comienza a exportar"
          onClick={() => toggleModalVisibility(!showModal)}
          isTypeFormButton
        />
      </div>
        <HowItWorksSection
          isSeller={true}
          lang={false}
          title="Cómo funciona"
          subtitle="Con Puentify a tu lado, exportar a los Estados Unidos nunca ha sido tan fácil"
        />
        <CallToAction lang={language} />
      <Footer lang={language} />
    </div>
  );
};

export default LandingPageSeller;
