import "./App.css";
import React from "react";
import {createAudioElement, toggleAudio} from "./utils/audioUtils.jsx";
import {createAnimationImage, animate} from "./utils/animationUtils.jsx";
import {createPhraseBox, phrase} from "./utils/phraseUtils.jsx";
import club from "./utils/club.easterEgg.jsx";

function App() {
    club(64);

    const imageUrls = [
        'assets/animation/shot-1.svg',
        'assets/animation/shot-2.svg',
        'assets/animation/shot-3.svg',
        'assets/animation/shot-4.svg',
        'assets/animation/shot-5.svg',
        'assets/animation/shot-6.svg',
        'assets/animation/shot-7.svg',
        'assets/animation/shot-8.svg',
        'assets/animation/shot-9.svg',
        'assets/animation/shot-10.svg',
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
    const start = () => {
        const audio = createAudioElement();
        const animationImage = createAnimationImage()
        const phraseBox = createPhraseBox();

        phrase(phraseBox, phrasesList);
        animate(animationImage, imageUrls);

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