// Anime Quote Fetcher with prefetch
const ANIME_QUOTE_API = 'https://api.animechan.io/v1/quotes/random';
const REFRESH_INTERVAL = 1800000; // 30 minutes

let nextQuote = null;

async function fetchSingleQuote() {
    try {
        const response = await fetch(ANIME_QUOTE_API);
        if (!response.ok) throw new Error('Failed to fetch quote');
        const data = await response.json();
        return normalizeQuote(data.quote, data.character, data.anime);
    } catch (error) {
        console.error('Error fetching anime quote:', error);
        return fallbackQuote();
    }
}

function normalizeQuote(text, character, anime) {
    return {
        text: text || 'Anime Quote',
        character: character || '',
        anime: anime || 'Anime'
    };
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

async function prefetchNextQuote() {
    nextQuote = await fetchSingleQuote();
}

async function useNextQuote() {
    // Use prefetched if available, otherwise fetch now
    const quote = nextQuote || await fetchSingleQuote();
    updateQuote(quote.text, quote.character, quote.anime);
    // Immediately prefetch the next one
    prefetchNextQuote();
}

function setLoading(isLoading) {
    const btn = document.getElementById('refresh-quote-btn');
    if (!btn) return;
    btn.classList.toggle('loading', isLoading);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    // Load first quote and prefetch next
    await useNextQuote();
    await prefetchNextQuote();

    // Auto-refresh quote every 30 minutes
    setInterval(useNextQuote, REFRESH_INTERVAL);
    
    // Manual refresh button
    const refreshBtn = document.getElementById('refresh-quote-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', async () => {
            setLoading(true);
            await useNextQuote();
            setLoading(false);
        });
    }
});

