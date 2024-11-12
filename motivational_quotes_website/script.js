// Sample quotes and images - these can be expanded or linked to a database or API
const quotes = [
    {
        text: "Believe you can and you're halfway there.",
        image: "https://source.unsplash.com/1600x900/?nature,hope"
    },
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        image: "https://source.unsplash.com/1600x900/?mountain,peace"
    },
    {
        text: "Do something today that your future self will thank you for.",
        image: "https://source.unsplash.com/1600x900/?sunrise,motivation"
    },
    {
        text: "Happiness is not by chance, but by choice.",
        image: "https://source.unsplash.com/1600x900/?happiness,smile"
    }
];

// Function to display a new quote and background
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Update quote text
    document.getElementById("quote").textContent = selectedQuote.text;

    // Update background image
    document.getElementById("background-image").style.backgroundImage = `url(${selectedQuote.image})`;
}

// Initial quote on load
window.onload = generateQuote;
