/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//Function to create a number between 0 and 255
let randomValue = () => Math.floor(Math.random() * 256);


//Function to create a color with values from randomValue
let randomRGB = (value) => {
 let color = `rgb( ${value(randomValue)}, ${value(randomValue)}, ${value(randomValue)} )`;
 return color;
}


//Calculates a random number between 0 and the max number of objects in the "quotes" array
let getRandomQuote = arr => {
  let randomQuote = Math.floor(Math.random() * arr.length);
  return quotes[randomQuote];
 }
 
 
 //Calls a random Object from the "quotes" array and parses the information into the proper HTML sections
 let printQuote = () => {
   let randomQuote = getRandomQuote(quotes);
   let title;
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
   if (randomQuote.category !== '') {
    title = `${randomQuote.category} Quote`;
   }
   html += `<p>`;
   //Replace title with tag + "quotes"
   document.getElementById('header-title').innerHTML = title;
   //Replace quote with one from array
   document.getElementById('quote-box').innerHTML = html;
   //researched code for changing background style and found this snippet here --> https://www.codegrepper.com/code-examples/javascript/how+to+change+background+color+of+html+element+in+javascript
   document.body.style.backgroundColor = `${randomRGB(randomValue)}`;
   }
 

   //Set a timer of 20 seconds till the quote automatically changes
 let interval = window.setInterval(printQuote, 20000);
 

//Array of quotes - properties include "quote", "source", "citation" and "year"
let quotes = [
  {
    quote: 'If you always do what you’ve always done, you always get what you’ve always gotten.',
    source: 'Jessie Potter',
    citation: 'The Milwaukee Sentinel',
    year: '1981',
    category: 'Lifestyle'
  },
  {
    quote: 'I have no special talent. I am only passionately curious.',
    source: 'Albert Einstein',
    citation: '',
    year: '',
    category: 'Education'
  },
  {
    quote: 'All that we are is the result of what we have thought. The mind is everything. What we think we become.',
    source: 'Buddha',
    citation: '',
    year: '625 B.C.',
    category: 'Lifestyle'
  },
  {
    quote: 'Stay hungry, stay foolish.',
    source: 'Stewart Brand',
    citation: 'The Whole Earth Catalog - Final Issue',
    year: '1974',
    category: 'Education'
  },
  {
    quote: 'Insanity: doing the same thing over and over again and expecting different results.',
    source: 'Albert Einstein',
    citation: '',
    year: '',
    category: 'Education'
  },
  {
    quote: 'Don’t count the days, make the days count.',
    source: 'Muhammad Ali',
    citation: 'ESPN',
    year: '1984',
    category: 'Lifestyle'
  },
  {
    quote: 'Well done is better than well said.',
    source: 'Benjamin Franklin',
    citation: '',
    year: '',
    category: 'Lifestyle'
  },
  {
    quote: 'I came, I saw, I conquered.',
    source: 'Julius Caesar',
    citation: 'Plutrarch\'s Life of Caesar',
    year: '47 B.C.',
    category: 'Lifestyle'
  },
  {
    quote: 'Be yourself; everyone else is already taken.',
    source: 'Oscar Wilde',
    citation: 'The Hudson Review',
    year: '1967',
    category: 'Lifestyle'
  },
  {
    quote: 'The only thing that interferes with my learning is my education.',
    source: 'Albert Einstein',
    citation: '',
    year: '',
    category: 'Education'
  },
  {
    quote: 'Education is the most powerful weapon which you can use to change the world.',
    source: 'Nelson Mandela',
    citation: 'Speech, Madison Park High School',
    year: '1990',
    category: 'Education'
  },
  {
    quote: 'It’s not how much you have that makes people look up to you, it’s who you are.',
    source: 'Elvis Presley',
    citation: '',
    year: '',
    category: 'Inspirational'
  },
  {
    quote: 'I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.',
    source: 'Bruce Lee',
    citation: '',
    year: '',
    category: 'Lifestyle'
  },
  {
    quote: 'Love all, trust a few, do wrong to none.',
    source: 'William Shakespeare',
    citation: 'All\'s Well That Ends Well',
    year: '1604',
    category: 'Lifestyle'
  }
  ];


//Listens for a click on the button and then loads the "printQuote" function when pressed
document.getElementById('load-quote').addEventListener("click", printQuote, false);
