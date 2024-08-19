import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { theme } from './lib/theme';
import Timer from './components/Timer';
import ButtonsRow from './components/ButtonsRow';

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
