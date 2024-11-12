// Zitate mit Links zu zufälligen Unsplash-Bildern
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
    },
    {
        text: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        image: "https://source.unsplash.com/1600x900/?success,motivation"
    }
];

// Funktion, um ein zufälliges Zitat anzuzeigen
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Aktualisiere das Zitat-Textfeld
    document.getElementById("quote").textContent = selectedQuote.text;

    // Aktualisiere das Hintergrundbild
    document.getElementById("background-image").style.backgroundImage = `url(${selectedQuote.image})`;
}

// Initiales Zitat beim Laden der Seite anzeigen
window.onload = generateQuote;

