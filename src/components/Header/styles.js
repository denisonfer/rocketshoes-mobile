import styled from 'styled-components/native';

import logo from '../../assets/images/Logo.png';

export const Container = styled.SafeAreaView`
  flex: 0;
  background: #191920;
`;

export const BoxHeader = styled.View`
  background: #191920;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 24px;
  width: 185px;
`;

export const Carrinho = styled.TouchableOpacity``;

export const ItemCount = styled.Text`
  position: absolute;
  top: -10;
  right: -10;

  background: #7159c1;
  padding: 2px;
  min-height: 20px;
  min-width: 20px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;
