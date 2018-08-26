
// Array of quotes
var quotes = [
    {
      quote: 'All we have to decide is what to do with the time that is given to us.',
      source: 'Gandalf',
      citation: 'Lord of the Rings: The Fellowship of the Ring',
      year: '2001',
      tag: 'inspirational'
    },
    {
      quote: 'Life moves pretty fast.  If you don\'t stop and look around once in a while, you could miss it.',
      source: 'Ferris Bueller',
      citation: 'Ferris Bueller\'s Day Off',
      year: '1986',
      tag: 'inspirational'
    },
    {
      quote: 'Every man dies, but not every man really lives.',
      source: 'William Wallace',
      citation: 'Braveheart',
      year:'1995' ,
      tag: 'inspirational'
    },
    {
      quote: 'Get busy livin\', or get busy dyin\'.',
      source: 'The Shawshank Redemption',
      citation: '',
      year: '1994',
      tag: 'inspirational'
    },
    {
      quote: 'Calling someone fat doesn\'t make you any skinnier.  Calling someone stupid doesn\'t make you any smarter.  All you can do in life is try and solve the problem in front of you.',
      source: 'Cady Heron',
      citation: 'Mean Girls',
      year: '2004',
      tag: 'inspirational'
    },
    {
      quote: 'It\'s not our abilities that show what we truly are.  It is our choices.',
      source: 'Professor Dumbledore',
      citation: 'Harry Potter and the Chamber of Secrets',
      year: '2002',
      tag: 'inspirational'
    },
    {
      quote: 'Strange, isn\'t it?  Each man\'s life touches so many other lives.  When he isn\'t around he leaves an awful hole, doesn\'t he?',
      source: 'Clarence the Angel',
      citation: 'It\'s a Wonderful Life',
      year: '1946',
      tag: ''
    },
    {
      quote: 'Do, or do not.  There is no try.',
      source: 'Yoda',
      citation: 'The Empire Strikes Back',
      year: '1980',
      tag: ''
    },
    {
      quote: 'It\'s just a flesh wound.',
      source: 'The Black Knight',
      citation: 'Monty Python and the Holy Grail',
      year: '1975',
      tag: 'humor'
    },
    {
      quote: 'I am serious.  And don\'t call me Shirley.',
      source: 'Dr. Rumack',
      citation: 'Airplane',
      year: '1980',
      tag: 'humor'
    },
    {
      quote: 'Martini.  Gin, not vodka.  Obviously.  Stirred for 10 seconds while glancing at an unopened bottle of vermouth.',
      source: 'Eggsy',
      citation: 'Kingsman: The Secret Service',
      year: '2014',
      tag: ''
    },
    {
      quote: 'Leave the gun. Take the cannoli.',
      source: 'Peter Clemenza',
      citation: 'The Godfather',
      year: '1972',
      tag: 'humor'
    },
    {
      quote: 'It\'s like I have ESPN or something.',
      source: 'Karen Smith',
      citation: 'Mean Girls',
      year: '2004',
      tag: 'humor'
    },
    {
      quote: 'Excuse me.  I believe you have my stapler.',
      source: 'Milton Waddams',
      citation: 'Office Space',
      year: '1999',
      tag: 'humor'
    },
    {
      quote: 'It\'s not a man purse.  It\'s a satchel.  Indiana Jones wears one.',
      source: 'Alan Garner',
      citation: 'The Hangover',
      year: '2009',
      tag: 'humor'
    },
    {
      quote: 'You had me at hello.',
      source: 'Dorothy Boyd',
      citation: 'Jerry Maguire',
      year: '1996',
      tag: ''
    },
    {
      quote: 'Always.',
      source: 'Severus Snape',
      citation: 'Harry Potter and the Deathly Hallows Part 2',
      year: '2011',
      tag: 'emotional'
    },
    {
      quote: 'You is kind. You is smart. You is important.',
      source: 'Aibileen Clark',
      citation: 'The Help',
      year: '2011',
      tag: ''
    },
    {
      quote: 'I would have followed you, my brother, my captain, my king.',
      source: 'Boromir',
      citation: 'Lord of the Rings: The Fellowship of the Ring',
      year: '2001',
      tag: 'emotional'
    },
    {
      quote: 'To live.  To live would be an awfully big adventure.',
      source: 'Peter \'Pan\' Banning',
      citation: 'Hook',
      year: '1991',
      tag: ''
    }
]

/* creates a random number based on a the length of the array
   Returns an array of the quote object from the array based on that random number
*/
function randomNum(limit) {
  return Math.floor(Math.random() * limit);
}

function getRandomQuote (array) {
  var random = randomNum(array.length);
  return (array[random]);
}

function randomColor() {
  var color = 'rgb(' + randomNum(256) + ',' + randomNum(256) + ',' + randomNum(256) + ')';
  return color;
}
/*
  Uses the getRandomQuote function to retreive a random quotes
  Concatenates html code and info from the random quote array.
  Prints this information to the quote-box div of the index.html file
*/
function printQuote () {
  var randomQuote = getRandomQuote(quotes);
  var html = '';
  html += '<p class="quote">' + randomQuote.quote;
  html += '</p> <p class="source">' + randomQuote.source;
  html += '<span class="citation">' + randomQuote.citation;
  html += '</span><span class="year">' + randomQuote.year;
  html += '</span></p>';
  //Checks to see if tag has data.  If it does, then it adds it to the html variable.
  if (printQuote.tag !== '') {
    html += '<p class="info"><span class="tag">';
    html += randomQuote.tag + '</span></p>';
  }
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = randomColor();
  }
printQuote();


var intervalID = window.setInterval(printQuote, 25000);


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
