import styled from 'styled-components';
import { IconProps } from '.';

type WrapperProps = Pick<IconProps, 'size' | 'color'>;

export const Container = styled.svg<WrapperProps>`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  stroke: ${({ color }) => color};
  fill: ${({ color }) => color};
`;
