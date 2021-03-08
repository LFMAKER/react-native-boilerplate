/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { navigate } from '~/navigation/RootNavigation';

import Routes from '~/navigation';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);

  useEffect(() => {
    async function checkLogged() {
      if (signed) {
        navigate('Logged');
      } else {
        navigate('Unlogged');
      }
    }

    checkLogged();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Routes />
    </>
  );
}
