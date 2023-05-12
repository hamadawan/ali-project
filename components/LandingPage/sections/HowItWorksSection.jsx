import React from 'react'
import List from '@/components/LandingPage/List'
import SellerList from "@/components/LandingPage/SellerList";

const HowItWorksSection = ({
  title,
  subtitle,
  lang,
  isSeller,
}) => {
    return (
        <section className="bg-white mt-32 text-[#323232]">
            <div className="container max-w-xl p-6 py-0 mx-auto space-y-16 text-gray-400 lg:px-8 lg:max-w-7xl">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-[#323232]">
                      { title }
                    </h1>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center">{subtitle}</p>
                </div>
              { isSeller ? <SellerList /> : <List lang={lang}/>}
            </div>
        </section>
    )
}

export default HowItWorksSection
