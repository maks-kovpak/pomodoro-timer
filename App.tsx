import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import ButtonsRow from './components/ButtonsRow';
import Timer from './components/Timer';
import { useTheme } from './hooks';

const App = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [start, setStart] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Timer start={start} />
      <ButtonsRow startedTimer={start} setStartedTimer={setStart} />

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

const createStyles = (theme: ReturnType<typeof useTheme>) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default App;
