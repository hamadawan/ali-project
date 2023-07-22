import React from 'react';
import FeatureCard from '../FeatureCard';
import icon1 from '@/public/assets/1.svg';
import icon2 from '@/public/assets/2.svg';
import icon3 from '@/public/assets/3.svg';

const FeatureSection = () => {
  return (
        <section className="mt-36 mx-8 md:mt-36 md:m-8 bg-white text-[#323232]">
            <div className="container mx-auto grid justify-center gap-28 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  title="Streamlined Sourcing"
                  icon= {icon1}
                  description="Find quality manufacturing companies in Mexico with ease. Our user-friendly platform offers reliable information all in one place."
                />
                <FeatureCard
                  title="Trust and Transparency"
                  icon={icon2}
                  description="Our review system ensures that you work with only quality manufacturers. Trustworthy information and secure transactions are our top priority."
                />
                <FeatureCard
                  title="Quality is Guaranteed"
                  icon={icon3}
                  description="We work with the best suppliers in Mexico to ensure the quality of our suppliers. Puentify makes finding quality suppliers a fiesta"
                />
            </div>
        </section>
  );
};

export default FeatureSection;
