import { StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay, faPause, faEllipsis, faForward } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../lib/theme';
import Button from './Button';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { Dispatcher } from '../lib/types';

interface ButtonsRowProps {
  startedTimer: boolean;
  setStartedTimer: Dispatcher<boolean>;
}

const SecondaryButton: React.FC<{ icon: IconDefinition }> = ({ icon }) => {
  return (
    <Button
      title={<FontAwesomeIcon icon={icon} color={theme.textColor} size={24} />}
      color={theme.secondaryButtonColor}
      style={styles.secondaryButton}
    />
  );
};

const ButtonsRow: React.FC<ButtonsRowProps> = ({ startedTimer, setStartedTimer }) => {
  const mainIcon = (
    <FontAwesomeIcon icon={startedTimer ? faPause : faPlay} color={theme.textColor} size={32} />
  );

  return (
    <View style={styles.buttons}>
      <SecondaryButton icon={faEllipsis} />

      <Button
        title={mainIcon}
        color={theme.primaryButtonColor}
        onPress={() => setStartedTimer((prev) => !prev)}
      />

      <SecondaryButton icon={faForward} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  secondaryButton: {
    height: 70,
    paddingHorizontal: 20,
  },
});

export default ButtonsRow;
