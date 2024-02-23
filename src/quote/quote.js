import { storage } from '../storage/storage.js';
import { getQuote } from '../api/api.js';

const TODAY_KEY = 'today';
const QUOTE_KEY = 'quote-of-the-day';

/**
 * Usage
 * const quoteContainer = document.querySelector('.home-quote');
 * await renderQuote(quoteContainer);
 * */
export async function renderQuote(container) {
  if (!container) {
    return;
  }

  const quote = await getQuoteText();

  // TODO: Render HTML here
  container.innerHTML = `<div>${quote.quote}</div><div>${quote.author}</div>`;
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
