import React from 'react';
import { string, func, number, bool } from 'prop-types';

import LoadingIndicator from '~/components/LoadingIndicator';

import { Container, WrapperDescription, Description, Icon } from './styles';

const Button = ({
  type,
  fontsize,
  icon,
  iconSize,
  colorIcon,
  description,
  style,
  onPress,
  loading,
  disabled,
}) => (
  <Container type={type} style={style} onPress={onPress} disabled={disabled}>
    {loading ? (
      <LoadingIndicator />
    ) : (
      <>
        {/* {icon && <Icon name={icon} size={iconSize} color={colorIcon} />} */}
        <WrapperDescription>
          {icon && <Icon source={icon} />}
          <Description type={type} fontsize={fontsize}>
            {description}
          </Description>
        </WrapperDescription>
      </>
    )}
  </Container>
);

Button.propTypes = {
  type: string,
  fontsize: number,
  icon: string,
  iconSize: number.isRequired,
  colorIcon: string,
  style: string,
  description: string,
  onPress: func,
  loading: string,
  disabled: bool,
};

Button.defaultProps = {
  type: 'primary',
  fontsize: 14,
  icon: null,
  colorIcon: '#FFF',
  style: {},
  description: 'Informe o texto do botao',
  loading: false,
  disabled: false,
  onPress: () => {},
};

export default Button;
