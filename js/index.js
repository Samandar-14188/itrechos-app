const cursor = document.querySelector(".custom-cursor");
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

// Kursor tezligini sozlaymiz
const speed = 0.15;

function animateCursor() {
    posX += (mouseX - posX) * speed;
    posY += (mouseY - posY) * speed;
    cursor.style.transform = `translate3d(${posX - 10}px, ${posY - 10}px, 0)`;
    requestAnimationFrame(animateCursor);
}

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.classList.add("custom-cursor-move");
});

// Animatsiyani boshlaymiz
animateCursor();
