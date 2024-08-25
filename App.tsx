import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import ButtonsRow from './components/ButtonsRow';
import Timer from './components/Timer';
import { theme } from './lib/theme';

const App = () => {
  const [start, setStart] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Timer start={start} />
      <ButtonsRow startedTimer={start} setStartedTimer={setStart} />

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
