import React, { useState } from 'react';
import Step1 from '@/components/ManufacturerInformation/Step1';
import Step2 from '@/components/ManufacturerInformation/Step2';
import Step3 from '@/components/ManufacturerInformation/Step3';
import Step4 from '@/components/ManufacturerInformation/Step4';
import Image from 'next/image';
import { StepProps } from './step.interface';

const steps = [
  { title: '1. Informacion de fabricante', content: Step1 },
  { title: '2. URL de la tienda', content: Step2 },
  { title: '3. Agrega tu primer producto', content: Step3 },
  { title: '4. Publicar tienda', content: Step4 },
];

const ProgressBar = ({ completion }: { completion: number }) => (
  <div className="h-4 w-full bg-gray-200 rounded-lg">
    <div
      className="h-4 bg-secondary rounded-lg"
      style={{ width: `${(completion / steps.length) * 100}%` }}
    ></div>
  </div>
);

const Step = ({ title, content: Content, isActive, onClick, handleStepClick, setManufacturerId }: StepProps) => (
  <div className={'py-6 bg-white'}>
    <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
      <h2 className="md:font-bold text-lg md:text-2xl leading-8 text-[#170F49]">{title}</h2>
      <span>
        {isActive ? (
          <Image src="/icons/minus.svg" alt="minus image" width={14} height={2} />
        ) : (
          <Image src="/icons/plus.svg" alt="plus image" width={14} height={14} />
        )}
      </span>
    </div>
    <div className={`mt-2 ${isActive ? '' : 'hidden'}`}>
      <Content handleStepClick={handleStepClick} setManufacturerId={setManufacturerId} />
    </div>
    <hr className="border-gray-100 mt-4" />
  </div>
);

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [, setManufacturerId] = useState('');

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <div className="p-4 mx-auto max-w-3xl">
      <div className="h-30 mb-8">
        <h1 className="font-bold text-2xl mb-6 text-center text-secondary">Comienza a vender</h1>
        <p className="text-center pb-4">
          <span className="font-bold"> {`${activeStep} de ${steps.length} `}</span>
          tareas completadas
        </p>
        <ProgressBar completion={activeStep + 1} />
      </div>
      <hr className="border-gray-100 mt-4" />
      {steps.map((step, index) => (
        <Step
          key={index}
          title={step.title}
          content={step.content}
          isActive={index === activeStep}
          onClick={() => handleStepClick(index)}
          handleStepClick={handleStepClick}
          setManufacturerId={setManufacturerId}
        />
      ))}
    </div>
  );
};

export default Onboarding;
