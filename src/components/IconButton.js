import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { icons } from '../icons';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme }) => theme.text};
`;

const IconButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Icon source={icon}></Icon>
      </View>
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  // icons는 객체 -> oneOf() 인자는 배열을 받으므로 객체를 배열로 변환
  icon: PropTypes.oneOf(Object.values(icons)).isRequired,
  onPress: PropTypes.func,
};

export default IconButton;
