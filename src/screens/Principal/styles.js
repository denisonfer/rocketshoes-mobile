import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const ListProducts = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 10px;
`;

export const CardProduct = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 5px;
  padding: 5px;
  width: ${Math.floor((width - 40) / 2)};

  justify-content: center;
`;

export const ImageProduct = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
  align-self: center;
`;

export const TitleProduct = styled.Text`
  font-weight: bold;
  color: #999;
  margin-bottom: 5px;
  text-align: left;
`;

export const PriceProduct = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonAddToCart = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #7159c1;
  margin-top: auto;
  border-radius: 4px;
`;

export const BoxIcon = styled.View`
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const IconCart = styled(MaterialCommunityIcons)`
  color: #fff;
`;

export const QtdItemCarrinho = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin: 0 auto;
  text-transform: uppercase;
`;
