import { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { withLeadingZero } from '../lib/utils';

interface TimerTime {
  minutes: number;
  seconds: number;
}

const Timer: React.FC<{ initialTime: TimerTime; start?: boolean }> = ({
  initialTime,
  start = true,
}) => {
  const [seconds, setSeconds] = useState(initialTime.minutes * 60 + initialTime.seconds);

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
    fontSize: 120,
    fontWeight: '900',
    lineHeight: 120,
    color: '#471515',
  },
});

export default Timer;
