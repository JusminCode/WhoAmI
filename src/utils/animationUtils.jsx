const createAnimationImage = () => {
    const AnimationImage = document.createElement('img');
    AnimationImage.classList.add('animated-image');
    document.querySelector('.container').appendChild(AnimationImage);
    return AnimationImage
}

const animate = (AnimationImage, imageUrls) => {
    let currentIndex = 0;
    setInterval(() => {
        AnimationImage.src = imageUrls[currentIndex];
        currentIndex = (currentIndex + 1) % imageUrls.length;
    }, 64);
};

export { createAnimationImage, animate };