/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Array of quotes - properties include "quote", "source", "citation" and "year"
let quotes = [
  {
    quote: 'If you always do what you’ve always done, you always get what you’ve always gotten.',
    source: 'Jessie Potter',
    citation: 'The Milwaukee Sentinel',
    year: '1981',
  },
  {
    quote: 'I have no special talent. I am only passionately curious.',
    source: 'Albert Einstein',
    citation: '',
    year: '',
  },
  {
    quote: 'All that we are is the result of what we have thought. The mind is everything. What we think we become.',
    source: 'Buddha',
    citation: '',
    year: '625 B.C.',
  },
  {
    quote: 'Stay hungry, stay foolish.',
    source: 'Stewart Brand',
    citation: 'The Whole Earth Catalog - Final Issue',
    year: '1974',
  },
  {
    quote: 'Insanity: doing the same thing over and over again and expecting different results.',
    source: 'Albert Einstein',
    citation: '',
    year: '',
  },
  {
    quote: 'Don’t count the days, make the days count.',
    source: 'Muhammad Ali',
    citation: '',
    year: '',
  },
  {
    quote: 'Well done is better than well said.',
    source: 'Benjamin Franklin',
    citation: '',
    year: '',
  },
  {
    quote: 'I came, I saw, I conquered.',
    source: 'Julius Caesar',
    citation: '',
    year: '',
  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde',
    citation: '',
    year: '',
  },
  {
    quote: 'The only thing that interferes with my learning is my education.',
    source: 'Albert Einstein',
    citation: '',
    year: '',
  },
  {
    quote: 'Education is the most powerful weapon which you can use to change the world.',
    source: 'Nelson Mandela',
    citation: '',
    year: '',
  },
  {
    quote: 'Little by little, one travels far.',
    source: 'J.R.R Tolkien',
    citation: '',
    year: '',
  },
  {
    quote: 'It’s not how much you have that makes people look up to you, it’s who you are.',
    source: 'Elvis Presley',
    citation: '',
    year: '',
  },
  {
    quote: 'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.',
    source: 'Bruce Lee',
    citation: '',
    year: '',
  },
  {
    quote: 'Love all, trust a few, do wrong to none.',
    source: 'William Shakespeare',
    citation: '',
    year: '',
  },
  ];


//Calculates a random number between 0 and the max number of objects in the "quotes" array
let getRandomQuote = arr => {
 let randomQuote = Math.floor(Math.random() * arr.length);
 return quotes[randomQuote];
}


//Calls a random Object from the "quotes" array and parses the information into the proper HTML sections
let printQuote = () => {
  let randomQuote = getRandomQuote(quotes);
  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `;
  if (randomQuote.citation !== '') {
    html +=`
      <span class="citation">${randomQuote.citation}</span>
      `;
  }
  if (randomQuote.year !== '') {
    html += `
      <span class="year">${randomQuote.year}</span>
      `;
  }
  html += `<p>`;
  document.getElementById('quote-box').innerHTML = html;
}


//Listens for a click on the button and then loads the "printQuote" function when pressed
document.getElementById('load-quote').addEventListener("click", printQuote, false);