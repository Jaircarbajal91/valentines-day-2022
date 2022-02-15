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


const form = document.querySelector('#form');
const acceptableNames = {
  Tika: 'Tika',
  Sweet: 'Sweet',
  Honey: 'Honey',
  Qt: 'Qt',
  Sweets: 'Sweets',
  Katniss: 'Katniss',
  Cuteness: 'Cuteness',
  Cute: 'Cute',
  Sweetheart: 'Sweetheart',
  'Mi Vida': 'Mi Vida',
  'Mi': 'Mi',
}

const acceptableLastNames = {
  Carbajal: 'Carbajal',
  Salas: 'Salas',
  Everdeen: 'Everdeen',
  Vida: 'Vida',
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let firstName = form.querySelector('input[name="first-name"]').value
  firstName = firstName.substring(0, 1).toUpperCase() + firstName.substring(1, firstName.length).toLowerCase().trim()
  let lastName = form.querySelector('input[name="last-name"]').value
  lastName = lastName.substring(0, 1).toUpperCase() + lastName.substring(1, lastName.length).toLowerCase().trim()
  console.log(firstName, lastName)
  if (firstName in acceptableNames && lastName in acceptableLastNames) {
    window.open('/love_letter/index.html', '_self');
  } else {
    // throw an alert saying the name input is incorrect
    alert(
      `You entered ${firstName} ${lastName}.

       Please enter a correct name.

       *Hint* Nick names work better :)`)
  }
})

