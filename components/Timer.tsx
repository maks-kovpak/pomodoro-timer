import { useState, useEffect, useMemo, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import { withLeadingZero } from '../lib/utils';

const styles = StyleSheet.create({
  countdown: {
    fontSize: 120,
    fontWeight: '900',
    lineHeight: 120,
    color: '#471515',
  },
});

interface TimerTime {
  minutes: number;
  seconds: number;
}

const Timer: React.FC<{ initialTime: TimerTime; start?: boolean }> = ({
  initialTime,
  start = true,
}) => {
  const [minutes, setMinutes] = useState(initialTime.minutes);
  const [seconds, setSeconds] = useState(initialTime.seconds);

  const getTime = useCallback(
    (deadline: Date) => {
      if (!start) return;

      const time = deadline.getTime() - Date.now();

      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    },
    [start]
  );

  useEffect(() => {
    const deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + initialTime.minutes);
    deadline.setSeconds(deadline.getSeconds() + initialTime.seconds);

    const inteval = setInterval(() => {
      getTime(deadline);
    }, 1000);

    return () => clearInterval(inteval);
  }, [initialTime]);

  return (
    <>
      <Text style={styles.countdown}>{withLeadingZero(minutes)}</Text>
      <Text style={styles.countdown}>{withLeadingZero(seconds)}</Text>
    </>
  );
};

export default Timer;
