import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useTheme } from '../hooks';

import type { TextInputProps } from 'react-native';

interface NumberInputProps extends TextInputProps {
  intialValue?: number;
  onChangeValue?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({
  intialValue,
  onChangeValue,
  min = -Infinity,
  max = Infinity,
  step = 1,
  ...props
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [internalValue, setInternalValue] = useState(intialValue || 0);

  const handleChange = (text: string) => {
    const numericValue = parseInt(text);

    if (!isNaN(numericValue) && numericValue >= min && numericValue <= max) {
      setInternalValue(numericValue);
      onChangeValue?.(numericValue);
    }
  };

  const increaseValue = () => {
    const currentValue = internalValue || 0;
    const newValue = Math.min(currentValue + step, max);
    setInternalValue(newValue);
    onChangeValue?.(newValue);
  };

  const decreaseValue = () => {
    const currentValue = internalValue || 0;
    const newValue = Math.max(currentValue - step, min);
    setInternalValue(newValue);
    onChangeValue?.(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseValue}>
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={internalValue.toString()}
          onChangeText={handleChange}
          keyboardType="numeric"
          editable={false}
          {...props}
        />

        <TouchableOpacity style={styles.button} onPress={increaseValue}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (theme: ReturnType<typeof useTheme>) => {
  return StyleSheet.create({
    container: {
      marginVertical: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      width: 40,
      height: 30,
      borderWidth: 1,
      borderColor: theme.textColor,
      borderRadius: 4,
      fontSize: 16,
      textAlign: 'center',
      color: theme.textColor,
      opacity: 1,
    },
    button: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.secondaryButtonColor,
      borderRadius: 4,
      marginHorizontal: 5,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.textColor,
    },
  });
};

export default NumberInput;
