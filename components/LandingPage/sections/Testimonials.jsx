import React from 'react'
import TestimonialCard from '../TestimonialCard'
import image1 from '@/public/assets/model-man.jpeg'
import image2 from '@/public/assets/model-woman.webp'
import image3 from '@/public/assets/model-woman-2.jpeg'

const Testimonials = (props) => {
    return (
        <div className="px-4 flex flex-col justify-center py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 bg-[#eff4fe]">
            <div data-aos="fade-right">
                <h1 className='max-w-lg mb-16 text-3xl font-bold sm:text-5xl md:ml-28 text-[#323232] capitalize'>{props.lang ? "Here from our clients" : "Testimonios de nuestros clientes"}</h1>
            </div>
            <div className=" flex flex-col justify-center mx-auto gap-8 md:flex-row md:justify-end md:gap-2 md:mr-20">
                <TestimonialCard
                  animation = {"50"}
                  text={props.lang ? "Maria from Green Planet Foods" : "Maria de Green Planet Foods"} review={props.lang ? 'Using Puente has been a game-changer for our business. We were struggling to find reliable manufacturers in Mexico, but after using Puente, we found a great partner that ticked all our boxes!' : "Usar Puente ha sido un parteaguas para nuestro negocio. Nos costaba encontrar fabricantes confiables en México, pero después de usar Puente, encontramos un gran socio que cumplió con todo lo que buscábamos."}
                  image={image3}
                />
                <TestimonialCard
                  animation = {"70"}
                  text={props.lang ? "John from TechFlow Solutions" : "John de TechFlow Solutions"} review={props.lang ? `Puente made it easy for us to track our orders and stay in touch with our Mexican manufacturers, adding a level of communication we didn't know we were missing.` : "Puente nos facilitó el seguimiento de nuestros pedidos y estar en contacto con nuestros fabricantes mexicanos, agregando un nivel de comunicación que no sabíamos que nos hacía falta."}
                  image={image1}
                />
                <TestimonialCard
                  animation = {"90"}
                  text={props.lang ? "Sarah from Blue Ocean Products" : "Sarah de Blue Ocean Products"} review={props.lang ? 'Before Puente, finding a reliable supplier in Mexico was a time-consuming and frustrating process. But with their help, our experience was smooth, quick, and we were able to save money along the way.' : "Antes de Puente, encontrar un proveedor confiable en México era un proceso tardado y frustrante. Pero con su ayuda, nuestra experiencia fue rápida, sencilla y pudimos ahorrar dinero en el camino."}
                  image={image3} />

            </div>
        </div>
    )
}

export default Testimonials
