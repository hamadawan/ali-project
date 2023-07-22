import React from 'react';
import WhyUsCard from '../WhyUsCard';
import icon1 from '@/public/assets/15.svg';
import icon2 from '@/public/assets/16.svg';
import icon3 from '@/public/assets/17.svg';
import StorefrontButton from '../StorefrontButton';

const WhyUs = (props) => {
  return (
        <div className=' text-center'>
            <div className=' px-6 md:px-24 text-[#323232]'>
                <div className="container bg-[#eff4fe] rounded-xl px-4 mt-16 py-16 mx-auto sm:max-w-lg md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div data-aos="fade-down" className=" max-w-xl mb-20 md:mx-auto text-center lg:max-w-2xl md:mb-12">
                        <h1 className="max-w-lg mb-16 text-3xl font-bold leading-none tracking-tight text-[#323232] sm:text-5xl md:mx-auto">
                            Why Us
                        </h1>
                    </div>
                    <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
                        <WhyUsCard animation = {'fade-right'} icon={icon1} title={props.lang ? 'Extensive Network of Reliable Suppliers' : 'Red extensa de proveedores confiables'} overview={props.lang ? 'Puente provides US buyers with access to a large network of reliable Mexican manufacturers that have been pre-vetted for quality, saving buyers time and guesswork.' : 'Puente te da acceso a una gran red de fabricantes mexicanos confiables que han sido checados por calidad, ahorrándote tiempo y adivinanzas.'} />
                        <WhyUsCard animation = {'fade-up'} icon={icon2} title={props.lang ? 'Exceptional Customer Service' : 'Servicio al cliente excepcional'} overview={props.lang ? 'Puente offers one-on-one customer support from a team of experts, ensuring that buyers receive personalized assistance throughout the entire selection, communication, and ordering processes.' : 'Puente ofrece soporte personalizado con un equipo de expertos, asegurando que los compradores reciban ayuda personalizada durante todo el proceso de selección, comunicación y pedidos.'} />
                        <WhyUsCard animation = {'fade-left'} icon={icon3} title={props.lang ? 'Streamlined Platform for Easy Communication' : 'Plataforma simplificada para comunicarte fácilmente'} overview={props.lang ? "With Puente's easy-to-use messaging and ordering platform, US buyers can stay in touch and up-to-date with manufacturers in Mexico, streamlining the purchasing process and minimizing confusion." : "Con la plataforma fácil de usar de Puente pa' mensajería y pedidos, los compradores de EE. UU. pueden estar en contacto y actualizados con los fabricantes en México, agilizando el proceso de compra y minimizando confusiones."} />
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className=' mt-16 mb-24'>
                <StorefrontButton text={'Create my storefront'} />
            </div>
        </div>
  );
};

export default WhyUs;
