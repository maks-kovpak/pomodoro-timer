import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { theme } from './lib/theme';
import Timer from './components/Timer';
import ButtonsRow from './components/buttons-row';

const App = () => {
  const [start, setStart] = useState(false);

  return (
    <View style={styles.container}>
      <Timer initialTime={{ minutes: 25, seconds: 0 }} start={start} />
      <ButtonsRow startedTimer={start} setStartedTimer={setStart} />

      <StatusBar style="dark" />
    </View>
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
