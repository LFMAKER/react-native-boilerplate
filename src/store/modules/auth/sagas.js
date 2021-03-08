import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, 'authenticate', {
      email,
      password,
    });

    const { Token, User } = response.data;

    api.defaults.headers.Authorization = `Bearer ${Token}`;

    yield put(signInSuccess(Token, User));
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro ao logar, verifique seus dados',
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
