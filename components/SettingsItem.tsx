import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../hooks/useTheme';

import type { FC, ReactNode } from 'react';

const SettingsItem: FC<{ name: string; input: ReactNode }> = ({ name, input }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.row}>
      <Text style={styles.name}>{name}</Text>
      {input}
    </View>
  );
};

const createStyles = (theme: ReturnType<typeof useTheme>) => {
  return StyleSheet.create({
    row: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
    },
    name: {
      color: theme.textColor,
      fontSize: 16,
      fontWeight: '500',
    },
  });
};

export default SettingsItem;
