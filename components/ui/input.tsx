import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

const inputVariants = cva(
  "w-full border px-5 py-3 rounded-[10px] text-sm font-normal tracking-wide leading-5",
  {
    variants: {
      variant: {
        default: "bg-[#fff] border-[#D2DAE2] text-[#576D99]",
        primary: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const labelVariants = cva("block font-normal text-sm mb-2 leading-5", {
  variants: {
    variant: {
      default: "text-[#6F6C90] ",
      primary: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  label?: string;
  containerClass?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, containerClass, label, className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "input";
    return (
      <div className={containerClass}>
        {label && (
          <label htmlFor={id} className={labelVariants({ variant })}>
            {label}
          </label>
        )}
        <Comp id={id} className={inputVariants({ variant, className })} ref={ref} {...props} />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
