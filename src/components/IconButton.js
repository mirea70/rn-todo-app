import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { icons } from '../icons';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme, completed }) =>
    completed ? theme.done : theme.text};
`;

const IconButton = ({ icon, onPress, item }) => {
  const _onPress = () => {
    onPress(item.id);
  };
  return (
    <TouchableOpacity onPress={_onPress}>
      <View>
        <Icon source={icon} completed={item.completed}></Icon>
      </View>
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  item: { completed: false },
};

IconButton.propTypes = {
  // icons는 객체 -> oneOf() 인자는 배열을 받으므로 객체를 배열로 변환
  icon: PropTypes.oneOf(Object.values(icons)).isRequired,
  onPress: PropTypes.func,
  item: PropTypes.object,
};

export default IconButton;
