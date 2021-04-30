import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ToastiFly from './index';

export default {
  title: 'ToastiFly',
  component: ToastiFly
} as Meta;

export const Default: Story = (args) => <ToastiFly {...args} />;
