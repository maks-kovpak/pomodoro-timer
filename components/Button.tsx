import React, { ReactNode } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import type { ButtonProps } from 'flowbite-react';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 32,
  },
});

const Button: React.FC<ButtonProps & { title: ReactNode; color: string }> = ({
  title,
  color,
  onPress,
  ...props
}) => {
  return (
    <Pressable style={[{ backgroundColor: color }, styles.button]} onPress={onPress} {...props}>
      <View>{title}</View>
    </Pressable>
  );
};

export default Button;
