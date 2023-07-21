import React, { useState } from 'react';
import Step1 from '@/components/ManufacturerInformation/Step1';
import Step2 from '@/components/ManufacturerInformation/Step2';
import Step3 from '@/components/ManufacturerInformation/Step3';
import Step4 from '@/components/ManufacturerInformation/Step4';

const steps = [
  { title: '1. Informacion de fabricante', content: <Step1 /> },
  { title: '2. URL de la tienda', content: <Step2 /> },
  { title: '3. Agrega tu primer producto', content: <Step3 /> },
  { title: '4. Publicar tienda', content: <Step4 /> },
];

const ProgressBar = ({ completion }) => (
  <div className="h-2 w-full bg-gray-200 rounded">
    <div
      className="h-2 bg-secondary rounded"
      style={{ width: `${(completion / steps.length) * 100}%` }}
    ></div>
  </div>
);

const Step = ({ title, content, isActive, onClick }) => (
  <div className={'py-6 bg-white'}>
    <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
      <h2 className="font-bold">{title}</h2>
      <span>{isActive ? '-' : '+'}</span>
    </div>
    {isActive && <div className="mt-2">{content}</div>}
    <hr className="border-gray-100 mt-4" />
  </div>
);

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="p-4 mx-auto max-w-3xl">
      <div className="h-30 mb-8">
        <h1 className="font-bold text-2xl mb-4 text-center text-secondary">Comienza a vender</h1>
        <p className="text-center">
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
        />
      ))}
    </div>
  );
};

export default Onboarding;
