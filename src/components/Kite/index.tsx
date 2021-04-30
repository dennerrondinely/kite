import React from 'react';
import Icon from 'components/Icon';

import * as S from './styles';

const Kite = () => {
  return (
    <S.Kite>
      <S.Wrapper>
        <S.Cloud>
          <S.Content>TostFly</S.Content>
          <S.CloseButton>
            <Icon color="#000000" icon="close" size={11} />
          </S.CloseButton>
        </S.Cloud>
      </S.Wrapper>
    </S.Kite>
  );
};

export default Kite;
