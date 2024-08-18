import { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useAudio } from '../hooks';
import { withLeadingZero } from '../lib/utils';
import { theme } from '../lib/theme';

interface TimerProps {
  initialTime: {
    minutes: number;
    seconds: number;
  };
  start?: boolean;
}

const alarm = require('../assets/audio/alarm.mp3');

const Timer: React.FC<TimerProps> = ({ initialTime, start = true }) => {
  const [seconds, setSeconds] = useState(initialTime.minutes * 60 + initialTime.seconds);
  const { playSound } = useAudio(alarm);

  useEffect(() => {
    if (seconds <= 0) {
      playSound();
    }
  }, [seconds]);

  useEffect(() => {
    if (!start || seconds <= 0) return;

    const inteval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(inteval);
  }, [start, seconds]);

  return (
    <>
      <Text style={styles.countdown}>{withLeadingZero(Math.floor(seconds / 60))}</Text>
      <Text style={styles.countdown}>{withLeadingZero(seconds % 60)}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  countdown: {
    fontSize: 180,
    fontWeight: '900',
    lineHeight: 180,
    color: theme.textColor,
  },
});

export default Timer;
