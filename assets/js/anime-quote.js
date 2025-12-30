// Anime Quote Fetcher using local CSV dataset (no external API)
const QUOTE_DATA_URL = 'assets/dataset/lessreal-data.csv';
const REFRESH_INTERVAL = 1800000; // 30 minutes
const PREFETCH_SIZE = 10;

let quotes = [];
let quoteQueue = [];

async function loadQuotesFromCsv() {
    try {
        const response = await fetch(QUOTE_DATA_URL);
        if (!response.ok) throw new Error('Failed to load quotes CSV');
        const text = await response.text();
        quotes = parseCsv(text);
    } catch (error) {
        console.error('Error loading local quote CSV:', error);
        quotes = []; // fallback will be used
    }
}

function parseCsv(text) {
    const lines = text.split('\n').slice(1); // skip header
    const parsed = [];
    for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line) continue;
        const parts = line.split(';');
        if (parts.length < 4) continue;
        const anime = cleanField(parts[1]);
        const character = cleanField(parts[2]);
        const quoteText = cleanField(parts[3]);
        if (!quoteText) continue;
        parsed.push({ text: quoteText, character, anime });
    }
    return parsed;
}

function cleanField(value) {
    if (!value) return '';
    return value.trim()
        .replace(/^"|"$/g, '')
        .replace(/^\(|\)$/g, '')
        .trim();
}

function randomQuote() {
    if (quotes.length === 0) return fallbackQuote();
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote(text, character, anime) {
    const quoteEl = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');
    if (!quoteEl || !authorEl) return;

    const safeText = text || 'Anime Quote';
    const safeAnime = anime || 'Anime';
    const safeCharacter = character || '';
    const author = safeCharacter ? `${safeCharacter} (${safeAnime})` : safeAnime;

    quoteEl.textContent = safeText;
    authorEl.textContent = author;
}

function fallbackQuote() {
    const fallbackQuotes = [
        { text: 'Believe in the me that believes in you!', character: 'Kamina', anime: 'Tengen Toppa Gurren Lagann' },
        { text: 'It\'s not about the result. It\'s about how you did it.', character: 'Naruto', anime: 'Naruto' },
        { text: 'The moment you think of giving up is the moment you should hold on harder.', character: 'Anime Wisdom', anime: '' },
        { text: 'All we have to decide is what to do with the time that is given to us.', character: 'Gandalf', anime: 'The Hobbit' },
        { text: 'Don\'t ever give up, no matter how hard it seems.', character: 'Perseverance', anime: '' }
    ];
    return fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
}

async function prefillQueue() {
    while (quoteQueue.length < PREFETCH_SIZE) {
        quoteQueue.push(randomQuote());
    }
}

async function nextPrefetchedQuote() {
    if (quoteQueue.length === 0) await prefillQueue();
    const quote = quoteQueue.shift() || randomQuote();
    await prefillQueue();
    return quote;
}

async function useNextQuote() {
    const quote = await nextPrefetchedQuote();
    updateQuote(quote.text, quote.character, quote.anime);
}

function setLoading(isLoading) {
    const btn = document.getElementById('refresh-quote-btn');
    if (!btn) return;
    btn.classList.toggle('loading', isLoading);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    await loadQuotesFromCsv();
    await prefillQueue();
    await useNextQuote();

    setInterval(useNextQuote, REFRESH_INTERVAL);
    
    const refreshBtn = document.getElementById('refresh-quote-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', async () => {
            setLoading(true);
            await useNextQuote();
            setLoading(false);
        });
    }
});

