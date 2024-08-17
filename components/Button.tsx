import React, { ReactNode } from 'react';
import { View, StyleSheet, Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native';

interface ButtonProps extends PressableProps {
  title: ReactNode;
  color: string;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ title, color, style, ...props }) => {
  return (
    <Pressable style={[styles.button, { backgroundColor: color }, style]} {...props}>
      <View>{title}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
});

export default Button;
