import React from 'react';

import { screen, render } from '@testing-library/react';

import Icon from './index';

describe('<Icon />', () => {
  it('should render the icon size', () => {
    render(<Icon color="#FFFFFF" size={15} icon="close" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveStyle({
      height: '15px'
    });
  });
});
