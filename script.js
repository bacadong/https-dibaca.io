function createFlower() {
    const flowers = ['🌸', '🌺', '🌹', '🌷'];
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(flower);
    
    // Remove flower after animation ends
    flower.addEventListener('animationend', () => {
        flower.remove();
    });
}

// Create flowers periodically
setInterval(createFlower, 300);


