import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { theme } from './lib/theme';
import Timer from './components/Timer';
import ButtonsRow from './components/ButtonsRow';
import TimerProvider from './providers/TimerProvider';

const App = () => {
  const [start, setStart] = useState(false);

  return (
    <TimerProvider>
      <SafeAreaView style={styles.container}>
        <Timer start={start} />
        <ButtonsRow startedTimer={start} setStartedTimer={setStart} />

        <StatusBar style="dark" />
      </SafeAreaView>
    </TimerProvider>
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
