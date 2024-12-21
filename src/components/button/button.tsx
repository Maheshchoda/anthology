import { ComponentProps } from 'react';

import { variants, type ButtonVariants } from './button.variants';

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    variant: 'primary' | 'secondary' | 'destructive';
  };
export const Button = ({ variant = 'primary', size = 'medium', ...props }: ButtonProps) => {
  return <button {...props} className={variants({ variant, size })} />;
};

// A. <button {...props} className={CLASSES} />;
// vs
// B. <button   className={CLASSES} {...props}/>;

// In A example, while developing the button even if someone passes the classes it won't effect because classes will take precedence.

// In B example, when someone passes the classes while developing it will takes the effect.
