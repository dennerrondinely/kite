import React from 'react';
import Icon from 'components/Icon';

import * as S from './styles';
import { Type } from 'types/type';

export type KiteProps = {
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';
  type?: Type;
  delay?: number;
};

const Kite = ({ position = 'top-right', type = 'default' }: KiteProps) => {
  return (
    <S.Kite>
      <S.Wrapper position={position}>
        <S.Content type={type}>
          <S.Text>TostFly</S.Text>
          <S.CloseButton color={type}>
            <Icon
              color={type === 'default' ? '#000000' : '#FFFFFF'}
              icon="close"
              size={11}
            />
          </S.CloseButton>
        </S.Content>
      </S.Wrapper>
    </S.Kite>
  );
};

export default Kite;
