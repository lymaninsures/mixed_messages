const quote1 = ['Funky Chicken', 'Hammer Dance', 'Doo Wop', 'Cabbage Patch'];
const quote2 = ['is the best dance', 'should never be done', 'will get you a date'];
const quote3 = ['today', 'just kidding', 'tomorrow', 'yesterday'];

const selectQuote = (quote) => {
  let selectedQuote = Math.floor(Math.random() * quote.length);
  return quote[selectedQuote];
}

let returnedQuote = `${selectQuote(quote1)} ${selectQuote(quote2)} ${selectQuote(quote3)}`

console.log(returnedQuote)