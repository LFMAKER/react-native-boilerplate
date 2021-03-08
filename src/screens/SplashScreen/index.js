import React from 'react';

import { Images } from '~/assets/images';

import { Container, Logo } from './styles';

const SplashScreen = () => {
  return (
    <Container>
      <Logo source={Images.LogoMain} />
    </Container>
  );
};

export default SplashScreen;
