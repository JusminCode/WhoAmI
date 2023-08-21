import "./App.css";
import React from "react";
import {createAudioElement, toggleAudio} from "./utils/audioUtils.jsx";
import {createAnimationImage, animate} from "./utils/animationUtils.jsx";
import {createPhraseBox, phrase} from "./utils/phraseUtils.jsx";
import club from "./utils/club.easterEgg.jsx";

function App() {
    const preloadImages = (urls) => {
        const promises = urls.map((url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => reject();
                img.src = url;
            });
        });

        return Promise.all(promises);
    };

    club(64);

    const imageUrls = [
        'assets/animation/shot_01.png',
        'assets/animation/shot_02.png',
        'assets/animation/shot_03.png',
        'assets/animation/shot_04.png',
        'assets/animation/shot_05.png',
        'assets/animation/shot_06.png',
        'assets/animation/shot_07.png',
        'assets/animation/shot_08.png',
        'assets/animation/shot_09.png',
        'assets/animation/shot_10.png',
    ];

    const phrasesList = [
        "There’s no place like 127.0.0.1 😁",
        "Programmer:A machine that caffeine & pizza into code.",
        "Computers are fast, programmers keep it slow.",
        "Linux is only free if your time has no value.",
        "God is real... unless declared integer. 👼",
        "I not failed. I’ve just found 10,000 ways that won’t work.",
        "Whitespace is never white.",
    ];
    const start = async () => {
        const audio = createAudioElement();
        const animationImage = createAnimationImage()
        const phraseBox = createPhraseBox();

        phrase(phraseBox, phrasesList);

        try {
            await preloadImages(imageUrls);
            animate(animationImage, imageUrls);
        } catch (error) {
            console.error('Error preloading images:', error);
        }

        const container = document.querySelector(".container");
        container.removeChild(document.querySelector(".begin"));
        document.querySelector("body").classList.add("colored-background");

        animationImage.onclick = () => toggleAudio(audio);
    }
    return (
        <div className="container">
      <span
          className="begin glitch"
          data-text="Begin (🔊)"
          onClick={start}
      >
        Begin (🔊)
      </span>
        </div>
    );
}

export default App;