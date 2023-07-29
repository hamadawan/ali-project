import { MouseEventHandler } from 'react';

export interface StepProps {
  isActive: boolean;
  title: string;
  handleStepClick: Function;
  setManufacturerId: Function;
  manufacturerId: string;
  slug: string;
  setSlug: Function;
  onClick: MouseEventHandler<HTMLDivElement>;
  content: any;
}
