import React from 'react'
import List from '../List'

const HowItWorksSection = (props) => {
    return (
        <section className="bg-white mt-32 text-[#323232]">
            <div className="container max-w-xl p-6 py-0 mx-auto space-y-16 text-gray-400 lg:px-8 lg:max-w-7xl">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-[#323232]">{props.lang ? "How it works" : "Cómo funciona"}</h1>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center">{props.lang ? "Puente makes finding quality suppliers so effortless, you can finally relax with a siesta and leave the work to us" : "Puente hace que encontrar proveedores de calidad sea tan fácil que al fin puedes echarte una siesta y dejarnos el trabajo a nosotros."}</p>
                </div>
                <List lang = {props.lang}/>
            </div>
        </section>
    )
}

export default HowItWorksSection
