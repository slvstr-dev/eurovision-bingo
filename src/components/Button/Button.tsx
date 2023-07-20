import React, { PropsWithChildren } from 'react';
import { Text, Pressable } from 'react-native';
import { tv } from 'tailwind-variants';

export type ButtonProps = PropsWithChildren & {
  onPress?: () => void;
  text: string;
  disabled?: boolean;
};

export const Button = ({ onPress, disabled, children }: ButtonProps) => {
  const { base, text } = button({ size: 'sm', color: 'secondary', isDisabled: disabled });

  return (
    <Pressable className={base()} onPress={onPress} disabled={disabled}>
      <Text className={text()}>{children}</Text>
    </Pressable>
  );
};

const button = tv({
  slots: {
    base: 'font-medium rounded-full active:opacity-80',
    text: 'text-white',
  },
  variants: {
    color: {
      primary: {
        base: 'bg-amber-500',
      },
      secondary: {
        base: 'bg-red-500',
      },
    },
    size: {
      sm: {
        text: 'text-sm',
      },
      md: {
        text: 'text-base',
      },
      lg: {
        text: 'px-4 py-3 text-lg',
      },
    },
    isDisabled: {
      true: {
        base: 'bg-gray-500',
      },
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});
