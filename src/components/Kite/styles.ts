import styled, { css } from 'styled-components';
import { Type } from 'types/type';
import { KiteProps } from '.';

type ContentProps = {
  type: Type;
};

type CloseProps = {
  color: Type;
};

type WrapperProps = Pick<KiteProps, 'position'>;

const getType = {
  info: () =>
    css`
      background: #3498db;
    `,
  success: () =>
    css`
      background: #07bc0c;
    `,
  warning: () =>
    css`
      background: #f1c40f;
    `,
  error: () =>
    css`
      background: #e74c3c;
    `,
  default: () => css`
    background: #fff;
    color: #aaa;
  `,
  dark: () => css`
    background: #121212;
    color: #fff;
  `
};

const getPosition = {
  'top-left': () => css`
    top: 1em;
    left: 1em;
  `,
  'top-right': () => css`
    top: 1em;
    right: 1em;
  `,
  'top-center': () => css`
    top: 1em;
    left: 50%;
    transform: translateX(-50%);
  `,
  'bottom-left': () => css`
    bottom: 1em;
    left: 1em;
  `,
  'bottom-right': () => css`
    bottom: 1em;
    right: 1em;
  `,
  'bottom-center': () => css`
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
  `
};

export const Kite = styled.div``;

export const Wrapper = styled.div<WrapperProps>`
  z-index: 9999;
  transform: translateZ(9999px);
  position: fixed;
  padding: 4px;
  width: 320px;
  box-sizing: border-box;
  color: #fff;

  ${({ position = 'top-right' }) => getPosition[position]()};
`;

export const Content = styled.div<ContentProps>`
  position: relative;
  min-height: 64px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  max-height: 800px;
  overflow: hidden;
  font-family: sans-serif;
  cursor: pointer;
  direction: ltr;

  ${({ type = 'default' }) => getType[type]()}

  transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
  transform: translateX(0px);
  opacity: 1;
`;

export const Text = styled.div`
  margin: auto 0;
  padding: 6px;
`;

export const CloseButton = styled.button<CloseProps>`
  opacity: ${({ color }) => (color === 'default' ? 0.3 : 0.7)};
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: 0.3s ease;
  -ms-flex-item-align: start;
  align-self: flex-start;

  > svg {
    fill: currentColor;
  }
`;
