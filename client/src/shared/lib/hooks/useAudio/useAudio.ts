import { useRef } from 'react';

export function useAudio(file?: string): HTMLAudioElement {
    const audioRef = useRef<HTMLAudioElement>();

    const audio = new Audio();

    if (file) {
        audio.src = `${__STATIC_URL__}${file}`;
    }

    audioRef.current = audio;

    return audioRef.current;
}
