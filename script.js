function moveButton() {
    const noBtn = document.getElementById('noBtn');

    // Calculate random positions within the screen width/height
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // Update the fixed position
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}
function celebrate() {
    alert("Yay! I knew you'd say yes! ❤️");
    // You can redirect to another page or play a sound here
}