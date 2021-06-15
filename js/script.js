/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

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

let test = '';

for ( let i = 0; i < quotes.length; i++) {
  test += 
  `
  Name: ${quotes[i].source}
  Quote: ${quotes[i].quote}
  `;

  if (quotes[i].year !== '') {
    test += `Year: ${quotes[i].year}
    `;
  }

  if (quotes[i].citation !== '') {
    test += `Citation: ${quotes[i].citation}
    `;
  }
  
}

console.log(test);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);