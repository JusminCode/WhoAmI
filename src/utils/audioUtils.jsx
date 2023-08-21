const createAudioElement = () => {
    const audio = document.createElement('audio');
    audio.src = 'assets/audio/Majestic_x_Boney_M-Rasputin_2022_Remix.mp3';
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