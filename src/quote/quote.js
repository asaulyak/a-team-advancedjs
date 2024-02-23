import { storage } from '../storage/storage.js';
import { getQuote } from '../api/api.js';

const TODAY_KEY = 'today';
const QUOTE_KEY = 'quote-of-the-day';

export async function renderQuote(container) {
  const quoteContainer = document.querySelector('.js-quote-content');
  if (!quoteContainer) {
    console.log('Quote container not found');
    return;
  }

  const quote = await getQuoteText();
  quoteContainer.innerHTML = `
<blockquote class="blockquote" cite="https://your-energy.b.goit.study/api/quote">
          <p
            class="quote-text">${quote.quote}
          </p>
          <footer class="quote-author">${quote.author} </footer>
        </blockquote>

	`;
}

async function getQuoteText() {
  const lastDayStored = storage.get(TODAY_KEY);
  const today = getTodayFormatted();

  let quote = storage.get(QUOTE_KEY);
  if (lastDayStored !== today || !quote) {
    quote = await getQuote();
  }

  storage.set(QUOTE_KEY, quote);
  storage.set(TODAY_KEY, today);

  return quote;
}

function getTodayFormatted() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  return `${day}/${month}/${year}`;
}
