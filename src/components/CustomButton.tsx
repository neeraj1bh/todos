import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

type Props = {
  title: string;
  handlePress?: () => void;
  containerStyles?: string;
  textStyles?: string;
};

function CustomButton({
  title, handlePress, containerStyles, textStyles,
}: Props) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
}

CustomButton.defaultProps = {
  handlePress: () => {},
  containerStyles: '',
  textStyles: '',
};

export default CustomButton;
