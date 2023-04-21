import React from 'react'
import FeatureCard from '../FeatureCard'
import icon1 from '@/public/assets/1.svg'
import icon2 from '@/public/assets/2.svg'
import icon3 from '@/public/assets/3.svg'

const FeatureSection = (props) => {
    return (
        <section className="mt-36 mx-8 md:mt-36 md:m-8 bg-white text-[#323232]">
            <div className="container mx-auto grid justify-center gap-28 md:px-32 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard animation = {"fade-right"} title = {props.lang ? 'Streamlined Sourcing' : "Búsqueda simplificada"} icon = {icon1} description = {props.lang ? 'Find Quality Manufacturing Companies in Mexico with Ease. Our User-Friendly Platform Offers Reliable Information All in One Place.' : "Encuentra fábricas de calidad en México sin problemas. Nuestra plataforma amigable ofrece información confiable, todo en un solo lugar."} />
                <FeatureCard animation = {"fade-up"} title = {props.lang ? 'Trust and Transparency' : "Confianza y transparencia"} icon = {icon2} description = {props.lang ? 'Our Review System Ensures That You Work with Only Quality Manufacturers. Trustworthy Information and Secure Transactions are Our Top Priority.' : "Nuestro sistema de reseñas garantiza que trabajes solo con fabricantes de calidad. La información confiable y las transacciones seguras son lo más importante para nosotros."} />
                <FeatureCard animation = {"fade-left"} title = {props.lang ? 'Quality is Guaranteed' : "Calidad garantizada"} icon = {icon3} description = {props.lang ? 'Puente makes finding quality suppliers a fiesta' : "Puente hace que encontrar proveedores de calidad sea una fiesta."} />
            </div>
        </section>
    )
}

export default FeatureSection
