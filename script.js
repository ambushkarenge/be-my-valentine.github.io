function moveButton(event) {
    // If it's a touch event, prevent the default 'click' from happening
    if (event) event.preventDefault();

    const noBtn = document.getElementById('noBtn');

    // Calculate boundaries so the button stays fully on screen
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    // Generate random coordinates (ensuring at least 10px padding from edges)
    const x = Math.max(10, Math.random() * maxX);
    const y = Math.max(10, Math.random() * maxY);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function celebrate() {
    alert("Yay! I knew you'd say yes! ❤️");
    // You can redirect to another page or play a sound here
}