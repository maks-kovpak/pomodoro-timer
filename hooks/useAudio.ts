import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

import type { AVPlaybackSource } from 'expo-av';

export const useAudio = (src: AVPlaybackSource) => {
  const [sound, setSound] = useState<Audio.Sound>();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(src);
    setSound(sound);

    await sound.playAsync();
  };

  useEffect(() => {
    return sound ? () => void sound.unloadAsync() : undefined;
  }, [sound]);

  return { sound, playSound };
};
