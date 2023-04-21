import React from 'react'
import img1 from '@/public/assets/13.webp'
import img2 from '@/public/assets/14.webp'
import Image from "next/image";

const IntelligenceSection = (props) => {
    return (
        <div className=" bg-[#eff4fe] text-[#323232] relative flex flex-col px-4 py-16 mx-auto overflow-hidden  lg:block lg:flex-col-reverse lg:py-24 xl:py-40 md:px-8 sm:max-w-xl md:max-w-full">
      <div data-aos="fade-right" className="relative flex justify-start p-4 md:p-0 lg:p-0 xl:p-0 max-w-lg md:max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
        <div className="mb-16 lg:pl-14 lg:max-w-2xl lg:mb-0">
          <div className="max-w-xl mb-6">
            <h1 className="max-w-lg mb-6 text-[#323232] text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none">
                {props.lang ? "Discover Puente Intelligence" : "Descubre Puente Intelligence"}
            </h1>
            <p className="text-base mt-16 text-gray-400 md:text-2xl ">
            {props.lang ? "Puente uses the latest in AI technology to leverage advanced artificial intelligence and machine learning technologies to optimize the finding, communication, ordering, and shipping process for our customers. With Puente Intelligence, US buyers can enjoy an unparalleled level of efficiency and accuracy, allowing them to find reliable manufacturers in Mexico quickly, and manage orders seamlessly.By incorporating advanced AI technologies into our platform, Puente is changing the way US buyers find the best quality manufacturers in Mexico. The power of Puente Intelligence allows us to improve every aspect of the buying and fulfillment process, providing our customers with a seamless, stress-free experience." : "Puente usa lo último en tecnología de inteligencia artificial para optimizar la búsqueda, comunicación, pedidos y envíos para nuestros clientes. Con Puente Intelligence, los compradores de EE. UU. pueden disfrutar de un nivel de eficiencia y precisión sin igual, permitiéndoles encontrar fabricantes confiables en México rápidamente y gestionar pedidos sin problemas. Al incorporar tecnologías avanzadas de inteligencia artificial en nuestra plataforma, Puente está cambiando la forma en que los compradores de EE. UU. encuentran las mejores fábricas en México. El poder de Puente Intelligence nos permite mejorar"}
            </p>
          </div>
        </div>
      </div>
      <div  className="z-0 flex gap-10 justify-center h-full lg:pt-60 pl-14 lg:pl-0 md:pl-0 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-full lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:right-10 lg:items-center -rotate-[10deg]">
        <Image
          fill
          src={img1}
          className="object-contain h-72 sm:h-80 lg:h-[600px] xl:h-112 2xl:h-128 shadow-2xl rounded-b-3xl"
          alt=""
        />
        <Image
          fill
          src={img2}
          className="object-contain h-72 sm:h-80 lg:h-[600px] xl:h-112 2xl:h-128 shadow-2xl rounded-b-3xl"
          alt=""
        />
      </div>
    </div>

    )
}

export default IntelligenceSection
