function openHeart() {
    document.getElementById('loveMessage').style.display = 'block';
    for (let i = 0; i < 15; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '0px';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}
