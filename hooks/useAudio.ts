import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

import { wait } from '../lib/utils';

import type { AVPlaybackSource, AVPlaybackStatusSuccess } from 'expo-av';

export const useAudio = (src: AVPlaybackSource, onPlaybackEnd?: () => void) => {
  const [sound, setSound] = useState<Audio.Sound>();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(src);

    sound.setOnPlaybackStatusUpdate((status) => {
      const playbackStatus = status as AVPlaybackStatusSuccess;

      if (playbackStatus.durationMillis && onPlaybackEnd) {
        wait(playbackStatus.durationMillis).then(onPlaybackEnd);
      }
    });

    setSound(sound);

    await sound.playAsync();
  };

  useEffect(() => {
    return sound ? () => void sound.unloadAsync() : undefined;
  }, [sound]);

  return { sound, playSound };
};
