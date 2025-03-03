
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.animationDuration = Math.random() * 3 + 4 + 's';
    bubble.style.animationDelay = Math.random() * 2 + 's';
    bubble.style.borderColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    bubble.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    // Xóa dòng gán textContent
    document.getElementById('about').appendChild(bubble);
    
    setTimeout(() => bubble.remove(), 10000);
}

// Create starry background
function createStars() {
    const container = document.getElementById('stars');
    for(let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = star.style.height = Math.random() * 3 + 'px';
        star.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(star);
    }
}

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
    setInterval(createBubble, 300); 

    for(let i = 0; i < 100; i++) { 
        setTimeout(createBubble, i * 150);
    }

    createStars();
    
    document.querySelectorAll('.framed-image').forEach(img => {
        img.addEventListener('mousemove', (e) => {
            const rect = img.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            img.style.transform = `rotate3d(${y}, ${-x}, 0, 10deg) scale(1.05)`;
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'rotate(-2deg) scale(1)';
        });
    });
});