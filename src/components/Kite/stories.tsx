import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Kite, { KiteProps } from './index';

export default {
  title: 'Kite',
  component: Kite
} as Meta;

export const Default: Story<KiteProps> = (args) => <Kite {...args} />;
