const createAudioElement = () => {
    const audio = document.createElement('audio');
    audio.src = 'assets/audio/Aaron-smith-Dancin-KRONO_Remix.mp3';
    audio.loop = true;
    audio.autoplay = true;
    document.querySelector('.container').appendChild(audio);
    audio.style = "visibility: hidden;";
    return audio;
};

const toggleAudio = (audio) => {
    audio.paused ? audio.play() : audio.pause();
};

export { createAudioElement, toggleAudio };