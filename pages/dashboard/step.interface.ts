import { MouseEventHandler } from 'react';

export interface StepProps {
  isActive: boolean;
  title: string;
  handleStepClick: Function;
  setManufacturerId: Function;
  onClick: MouseEventHandler<HTMLDivElement>;
  content: any;
}
