import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import ButtonsRow from './components/ButtonsRow';
import SettingsModal from './components/SettingsModal';
import Timer from './components/Timer';
import { useTheme } from './hooks';

const App = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const [start, setStart] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Timer start={start} />
      <ButtonsRow
        startedTimer={start}
        setStartedTimer={setStart}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <SettingsModal visible={modalVisible} setVisible={setModalVisible} />

      <StatusBar style="light" backgroundColor="transparent" />
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
