import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { useAudio, useTheme } from '../hooks';
import { withLeadingZero } from '../lib/utils';
import { useTimer } from '../stores/timer';

import type { FC } from 'react';

interface TimerProps {
  start?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
const alarm = require('../assets/audio/alarm.mp3');

const Timer: FC<TimerProps> = ({ start = true }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const { time, setTime, isBreak, setBreak } = useTimer();
  const [seconds, setSeconds] = useState(time.minutes * 60 + time.seconds);

  useEffect(() => {
    setSeconds(time.minutes * 60 + time.seconds);
  }, [time]);

  const { playSound } = useAudio(alarm, () => {
    setTime({ seconds: isBreak ? 10 : 5, minutes: 0 });
    setBreak(!isBreak);
  });

  useEffect(() => {
    if (seconds <= 0) {
      void playSound();
    }
  }, [seconds]);

  useEffect(() => {
    if (!start || seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [start, seconds]);

  return (
    <>
      <Text style={styles.countdown}>{withLeadingZero(Math.floor(seconds / 60))}</Text>
      <Text style={styles.countdown}>{withLeadingZero(seconds % 60)}</Text>
    </>
  );
};

const createStyles = (theme: ReturnType<typeof useTheme>) => {
  return StyleSheet.create({
    countdown: {
      fontSize: 180,
      fontWeight: '900',
      lineHeight: 180,
      color: theme.textColor,
    },
  });
};

export default Timer;
