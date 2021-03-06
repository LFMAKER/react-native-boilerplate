import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 100px;
`;
