import styled from 'styled-components';

export const Kite = styled.div``;

export const Wrapper = styled.div`
  z-index: 9999;
  -webkit-transform: translateZ(9999px);
  position: fixed;
  padding: 4px;
  width: 320px;
  box-sizing: border-box;
  color: #fff;
`;

export const Cloud = styled.div`
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

  background: #fff;
  color: #aaa;

  transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
  transform: translateX(0px);
  opacity: 1;
`;

export const Content = styled.div`
  margin: auto 0;
  padding: 6px;
`;

export const CloseButton = styled.button`
  color: #fff;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  -ms-flex-item-align: start;
  align-self: flex-start;

  > svg {
    fill: currentColor;
  }

  color: #000;
  opacity: 0.3;
`;
