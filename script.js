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

// List your local filenames here
const gifList = [
    "meow1.gif",
    "meow2.gif",
    "meow3.gif",
    "meow4.gif",
    "meow5.PNG"
];

const questionList = [
    "Will you be my Valentine?",
    "I'll be your purr-fect match!",
    "Why are you paws-ing for so longggg?",
    "I'm not kitten around anymore...",
    "Peace was never an option!!!",
]
let currentGifIndex = 0;
const gifElement = document.getElementById('MainGIF');
const TextElement = document.getElementById('question');

// Store the timer in a variable so we can stop it later
const gifTimer = setInterval(changeGif, 5000);

function changeGif() {
    currentGifIndex++;

    // Check if we have reached the end of the list
    if (currentGifIndex < gifList.length) {
        gifElement.src = gifList[currentGifIndex];
        TextElement.textContent = questionList[currentGifIndex];
    } else {
        // STOP the timer completely
        clearInterval(gifTimer);
        //console.log("Sequence finished. Staying on the last GIF.");
    }
}

function celebrate() {
    alert("Yay! I knew you'd say yes! ❤️");
    // You can redirect to another page or play a sound here
}