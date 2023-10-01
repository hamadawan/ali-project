import { useCurrentUserQuery } from '@/graphql/queries/useCurrentUserQuery';
import Dashboard from '@/pages/dashboard/index';
import React, { MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import Step1 from '@/components/ManufacturerInformation/Step1';
import Step2 from '@/components/ManufacturerInformation/Step2';
import Step3 from '@/components/ManufacturerInformation/Step3';
import Step4 from '@/components/ManufacturerInformation/Step4';
import { Button } from '@/components/ui/button';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export interface StepProps {
  isActive: boolean;
  title: string;
  handleStepClick: Function;
  manufacturerId: string;
  slug: string;
  setSlug: Function;
  onClick: MouseEventHandler<HTMLDivElement>;
  content: any;
}

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
      style={{ width: `${(Math.min(completion, 4) / steps.length) * 100}%` }}
    ></div>
  </div>
);

const Step = ({
  title,
  content: Content,
  isActive,
  onClick,
  handleStepClick,
  manufacturerId,
  slug,
  setSlug,
}: StepProps) => (
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
      <Content
        handleStepClick={handleStepClick}
        manufacturerId={manufacturerId}
        slug={slug}
        setSlug={setSlug}
      />
    </div>
    <hr className="border-gray-100 mt-4" />
  </div>
);

const Onboarding = () => {
  const { data: currentUserData } = useCurrentUserQuery();
  const [activeStep, setActiveStep] = useState(0);
  const [slug, setSlug] = useState('');

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <Dashboard>
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
            manufacturerId={currentUserData?.currentUser?.currentManufacturer?.id}
            slug={slug}
            setSlug={setSlug}
          />
        ))}
        {activeStep === 4 && (
          <div>
            <p className="py-5 text-center text-lg leading-8 text-[#170F49]">
              ¡Tu tienda ha sido publicada con éxito!
            </p>
            <Button variant="secondary" className="mt-6 mb-8">
              Visitar tienda
            </Button>
          </div>
        )}
      </div>
    </Dashboard>
  );
};
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['dashboard'])),
  },
});

export default Onboarding;
