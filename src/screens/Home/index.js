import React, { useState } from 'react';
import { TextInput, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import DismissKeyboard from '~/components/DismissKeyboard';

import I18n from '~/i18n';

import { Container, WrapperTop, ContainerExample, Example } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <DismissKeyboard>
      <Container>
        <ContainerExample>
          <Example>Componente de exemplo</Example>
        </ContainerExample>

        <WrapperTop>
          <Text>E-mail</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />

          <Text>Senha</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

          <Button
            onPress={handleSubmit}
            title={loading ? I18n.t('loading') : I18n.t('login')}
            color="#00F"
          />
        </WrapperTop>
      </Container>
    </DismissKeyboard>
  );
};

export default Home;
