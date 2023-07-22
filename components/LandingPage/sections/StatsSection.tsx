import React from 'react';
import Stats from '../Stats';

const StatsSection = () => {
  return (
        <section className="p-6 sm:px-44 bg-[#26b9f1] text-white mt-32 py-20 md:py-48">
            <div className="container gap-7 sm:gap-0 mx-auto grid justify-center grid-cols-1 text-center lg:grid-cols-3">
                <Stats animation = {'fade-right'} heading = {'927'} subheading = {'Customers served'} />
                <Stats animation = {'fade-up'} heading = {'10,403'} subheading = {'Products sold'} />
                <Stats animation = {'fade-left'} heading = {'658'} subheading = {'Households improved'} />
            </div>
            <h2 className=' mt-9 text-4xl font-bold tracking-wider lg:text-[40px] text-center'>Investors</h2>
        </section>
  );
};

export default StatsSection;
