import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';

import Timer from './components/Timer';
import Button from './components/Button';

const App = () => {
  const [start, setStart] = useState(false);

  return (
    <View style={styles.container}>
      <Timer initialTime={{ minutes: 25, seconds: 0 }} start={start} />
      <Button
        title={<FontAwesomeIcon icon={start ? faPause : faPlay} color="#471515" size={32} />}
        color="rgba(255,76,76,0.71)"
        onPress={() => setStart(!start)}
      />
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
