import "./App.css";
import React from "react";
import {createAudioElement, toggleAudio} from "./utils/audioUtils.jsx";
import {createAnimationImage, animate} from "./utils/animationUtils.jsx";

function App() {
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
    const start = () => {
        const container = document.querySelector(".container");
        container.removeChild(document.querySelector(".begin"));
        document.querySelector("body").classList.add("colored-background");

        const audio = createAudioElement();
        const animationImage = createAnimationImage();
        animate(animationImage, imageUrls);
        animationImage.onclick = () => toggleAudio(audio);
    }
    return (
        <div className="container">
      <span
          className="begin glitch"
          data-text="Begin (with my favorite audio)"
          onClick={start}
      >
        Begin (with my favorite audio)
      </span>
        </div>
    );
}

export default App;