const createPhraseBox = () => {
    const phraseBox = document.createElement('p');
    phraseBox.classList.add('phrase-box');
    phraseBox.classList.add('flicker-text');
    document.querySelector('.container').appendChild(phraseBox);
    phraseBox.innerText = ' ';
    return phraseBox;
};

const phrase = (phraseBox, phrasesList) => {
    let phraseIndex = 0;
    const updatePhrase = () => {
        phraseIndex = (phraseIndex + 1) % phrasesList.length;
        document.querySelector('.phrase-box').innerText = phrasesList[phraseIndex];
    };
    setTimeout(() => {
        phraseBox.innerText = phrasesList[phraseIndex];
        setInterval(updatePhrase, 7890);
    }, 3000);
};

export { createPhraseBox, phrase };