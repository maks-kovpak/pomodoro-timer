import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Timer from './components/Timer';

const App = () => {
  return (
    <View style={styles.container}>
      <Timer initialTime={{ minutes: 0, seconds: 30 }} />
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
