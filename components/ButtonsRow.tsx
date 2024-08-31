import { faEllipsis, faPause, faPlay, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { type FC } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from './Button';
import { useTheme } from '../hooks';
import { useSettings } from '../stores/settings';
import { useTimer } from '../stores/timer';

import type { Dispatcher } from '../lib/types';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonsRowProps {
  startedTimer: boolean;
  setStartedTimer: Dispatcher<boolean>;
}

const SecondaryButton: FC<{ icon: IconDefinition; onPress?: () => void }> = ({ icon, onPress }) => {
  const theme = useTheme();

  return (
    <Button
      title={<FontAwesomeIcon icon={icon} color={theme.textColor} size={24} />}
      color={theme.secondaryButtonColor}
      style={styles.secondaryButton}
      onPress={onPress}
    />
  );
};

const ButtonsRow: FC<ButtonsRowProps> = ({ startedTimer, setStartedTimer }) => {
  const theme = useTheme();

  const { setTime, setBreak } = useTimer();
  const { focusTime } = useSettings();

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

      <SecondaryButton
        icon={faRotateRight}
        onPress={() => {
          setBreak(false);
          setTime(JSON.parse(JSON.stringify(focusTime)));
        }}
      />
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
