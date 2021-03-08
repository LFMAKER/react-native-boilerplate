import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Container = styled.TouchableOpacity`
  height: 44;
  border-width: 1;
  border-color: ${(props) =>
    props.type === 'primary'
      ? '#0163A5'
      : props.type === 'secondary'
      ? 'transparent'
      : props.type === 'tertiary'
      ? 'transparent'
      : 'transparent'};
  background-color: ${(props) =>
    props.type === 'primary'
      ? '#FFF'
      : props.type === 'secondary'
      ? '#004D92'
      : props.type === 'tertiary'
      ? 'rgb(177,73,61)'
      : 'transparent'};
  border-radius: 10;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Icon = styled.Image`
  margin-right: 10px;
`;

export const WrapperDescription = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Description = styled.Text`
  font-size: ${(props) => (screenWidth < 375 ? 13 : 15)};
  font-weight: bold;
  color: ${(props) =>
    props.type === 'primary'
      ? '#0163A5'
      : props.type === 'secondary'
      ? '#FFF'
      : '#FFF'};
  text-align: center;
`;
