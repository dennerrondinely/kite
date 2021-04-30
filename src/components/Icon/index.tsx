import React from 'react';

import { Container } from './styles';
import { Icons } from './types';
import iconPath from './icons';

export type IconProps = {
  size: number | string;
  icon: Icons;
  color?: '#FFFFFF' | '#000000';
};

const Icon = ({ icon = 'close', color = '#000000', ...props }: IconProps) => (
  <Container
    xmlns="http://www.w3.org/2000/svg"
    color={color}
    {...props}
    viewBox={iconPath[icon].viewBox}
  >
    {iconPath[icon].path}
  </Container>
);

export default Icon;
