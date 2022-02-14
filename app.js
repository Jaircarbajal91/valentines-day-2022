const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://love-quote.p.rapidapi.com/lovequote",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "love-quote.p.rapidapi.com",
    "x-rapidapi-key": "e36630588emsh31f2baf3125623ap15d53bjsndc8db25db158"
  }
};

function getQuote() {
  let quote = $.ajax(settings).done(function (response) {
    return response;
  });
  let quoteText = quote.then(response => {
    appendQuote(response)
  })
}
function appendQuote(quote) {
  let text = quote.quote
  let author = quote.author
  // append the text to the aside node
  if (text === 'undefined' || text == undefined) {
    getQuote();
  } else {
    let lovePoemText = document.querySelector('#love-poem-text')
    let lovePoemAuthor = document.querySelector('#love-poem-author')
    lovePoemText.textContent = `${text}`;
    lovePoemAuthor.textContent = `-${author}`;
  }
}

const newQuoteButton = document.querySelector('#new-quote')
newQuoteButton.addEventListener('click', (e) => {
  getQuote();
})
getQuote()

