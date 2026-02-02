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
    "meow1.GIF",
    "meow2.GIF",
    "meow3.GIF",
    "meow4.GIF",
    "meow5.PNG"
];

const questionList = [
    "Will you be my Valentine?",
    "I'll be your purr-fect match!",
    "Why are you paws-ing for so longggg?",
    "I'm not kitten around anymore...",
    "Peace was never an option!!!",
]

// Preload function to store GIFs in browser memory
const preloadGifs = (urls) => {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
};

// Call the function with your list
preloadGifs(gifList);


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
    TextElement.innerText = "Purr-fect! ❤️ See you soon!";
    noBtn.style.opacity = '0'; // Fades out the No button
    noBtn.style.pointerEvents = 'none'; // Disables it
    gifElement.style.transform = "scale(1.1)";
}