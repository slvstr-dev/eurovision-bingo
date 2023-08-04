import { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Tap me',
  },
  argTypes: {
    onPress: {
      action: 'onPress event',
    },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
