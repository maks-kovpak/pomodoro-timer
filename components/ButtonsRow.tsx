import { faEllipsis, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, View } from 'react-native';

import Button from './Button';
import { useTheme } from '../hooks';

import type { Dispatcher } from '../lib/types';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { FC } from 'react';

interface ButtonsRowProps {
  startedTimer: boolean;
  setStartedTimer: Dispatcher<boolean>;
}

const SecondaryButton: FC<{ icon: IconDefinition }> = ({ icon }) => {
  const theme = useTheme();

  return (
    <Button
      title={<FontAwesomeIcon icon={icon} color={theme.textColor} size={24} />}
      color={theme.secondaryButtonColor}
      style={styles.secondaryButton}
    />
  );
};

const ButtonsRow: FC<ButtonsRowProps> = ({ startedTimer, setStartedTimer }) => {
  const theme = useTheme();

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
