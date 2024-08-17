import { StyleSheet, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { faForward } from '@fortawesome/free-solid-svg-icons/faForward';

import { theme } from '../../lib/theme';
import Button from '../Button';

const ButtonsRow: React.FC<{
  startedTimer: boolean;
  setStartedTimer: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ startedTimer, setStartedTimer }) => {
  const moreOptionsIcon = <FontAwesomeIcon icon={faEllipsis} color={theme.textColor} size={24} />;

  const forwardIcon = <FontAwesomeIcon icon={faForward} color={theme.textColor} size={24} />;

  const mainIcon = (
    <FontAwesomeIcon icon={startedTimer ? faPause : faPlay} color={theme.textColor} size={32} />
  );

  return (
    <View style={styles.buttons}>
      <Button
        title={moreOptionsIcon}
        color={theme.secondaryButtonColor}
        style={styles.secondaryButton}
      />

      <Button
        title={mainIcon}
        color={theme.primaryButtonColor}
        onPress={() => setStartedTimer((prev) => !prev)}
      />

      <Button
        title={forwardIcon}
        color={theme.secondaryButtonColor}
        style={styles.secondaryButton}
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
