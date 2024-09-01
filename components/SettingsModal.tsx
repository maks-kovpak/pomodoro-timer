import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../hooks';

import type { Dispatcher } from '../lib/types';
import type { FC } from 'react';

const SettingsModal: FC<{ visible: boolean; setVisible: Dispatcher<boolean> }> = ({
  visible,
  setVisible,
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(visible)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>Settings</Text>
            <Pressable onPress={() => setVisible(false)}>
              <FontAwesomeIcon icon={faClose} color={theme.textColor} size={24} />
            </Pressable>
          </View>

          <View></View>
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (theme: ReturnType<typeof useTheme>) => {
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      width: '85%',
      height: '90%',
      margin: 20,
      backgroundColor: theme.backgroundColor,
      borderRadius: 15,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    header: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: '900',
      lineHeight: 24,
    },
  });
};

export default SettingsModal;
