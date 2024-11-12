const API_KEY = "EaxTkWCIa4vHFwB7yH93MXlMQ2uAvJaIovT3mkxQaktYVi9EPk4uvcqh";  // Dein Pexels API-Schlüssel hier einfügen

// Themen für die Suche nach Bildern
const topics = ["nature", "mountain", "motivation", "sunrise", "happiness", "peace", "inspired", "love"];

// Funktion, um ein zufälliges Zitat und Bild zu laden
async function generateQuote() {
    // Zufälliges Thema auswählen
    const topic = topics[Math.floor(Math.random() * topics.length)];

    // API-Anfrage an Pexels, um ein zufälliges Bild zu einem Thema zu bekommen
    const response = await fetch(`https://api.pexels.com/v1/search?query=${topic}&per_page=1`, {
        headers: {
            Authorization: API_KEY  // Dein API-Schlüssel wird hier verwendet
        }
    });

    const data = await response.json();
    const imageUrl = data.photos[0].src["1920x1080"];  // Bild in der gewünschten Auflösung (1920x1080)

    // Zufälliges Zitat auswählen (kannst du auch aus einer Liste definieren)
    const quotes = [
        "Believe you can and you're halfway there.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Do something today that your future self will thank you for.",
        "Happiness is not by chance, but by choice.",
        "Success is not final; failure is not fatal: It is the courage to continue that counts."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Das Zitat und das Hintergrundbild aktualisieren
    document.getElementById("quote").textContent = randomQuote;
    document.getElementById("background-image").style.backgroundImage = `url(${imageUrl})`;
}

// Initiales Zitat und Bild beim Laden der Seite anzeigen
window.onload = generateQuote;
