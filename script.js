var genreEl = document.querySelector("#genre");
var genreSearchEl = document.querySelector("#genreSearch");
var yearSearchEl = document.querySelector("#authorSearch");
var yearEl = document.querySelector("#author-bio");
var resutlsEl = document.querySelector("#results");
var searchBtnEl = document.querySelector("#searchBtn-1");
var searchBtnE2 = document.querySelector("#searchBtn-2");

// var for the google book embedded viewer

// starting the API call function

// function getApi () {

//   var requestedUrl = " ";

//     fetch(requestedUrl) {
//         .then(function(response) {
//             return json.response();
//         })

//         .then(function(data)) {
//              console.log(data);

//         }

// loop over the data and create a list of books by author

// for (var i = 0; i < data.length; i++) {

//     var bookList = document.createElement('td');
//     var bookRow = document.createElement('tr');

//     resutlsEl.appendChild(bookList);
//     bookList.appendChild(bookRow);

// }

// getApi();

//     }

// }

// basic click event for the genre search

function genreSearch() {
  searchBtnEl.addEventListener("click", function () {
    const bookGenre = genreSearchEl.value;

    if (bookGenre !== "") {
      console.log(bookGenre);
    } else {
      return;
    }
  });
}

genreSearch();

// basic click event for the year search

function authorBio() {
  searchBtnE2.addEventListener("click", function () {
    const authBio = yearSearchEl.value;

    if (authBio !== "") {
      console.log(authBio);
    } else {
      return;
    }
  });
}

authorBio();

function start() {
  // fetch("https://www.googleapis.com/books/v1/volumes?q=huckleberry+finn+intitle") depends on whats on the back side of the +
  fetch("https://www.googleapis.com/books/v1/volumes/R5FhzgEACAAJ")
    // the R5FhzgEACAAJ was taken from the google books

    // need to get isbn from localstorage/LOC  fetch('https://www.googleapis.com/books/v1/volumes/?q=isbn${isbn}');
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data.volumeInfo.description);
    })

    .catch(function (error) {
      console.log("Error: " + error.message);
    });
}

// probably don't need to use if we can make it work in the css framework
// function displayBooks()
// fetch("https://www.googleapis.com/books/v1/volumes/R5FhzgEACAAJ")
//   .then(response => response.text())
//   .then(data => {
//     eval(data);
//   })
//   .catch(error => {
//     console.error('Error loading Google Books API:', error);
//   });

// function initGoogleBooks() {
//   google.books.load();
// }

// function initialize() {
//   var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
//   viewer.load('ISBN:1234', alertNotFound);
// };

function foo(bookObject) {
  localStorage.setItem("bookObject", JSON.stringify(bookObject));
  start();
}
fetch("https://www.loc.gov/books/?q=books&fo=json&date=${2022}")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const results = data.results;
    console.log(results); // Check the value of 'results'
    // const books = results.filter(result => result.type && result.type.includes('book'));
    foo(results[20]);
    console.log(books);
  })
  .catch(function (error) {
    console.log("Error: " + error.message);
    const books2022 = books.filter((result) => result.date === "2022");
    const randomBooks = [];
    for (let i = 0; i < 100; i++) {
      const randomBookIndex = Math.floor(Math.random() * books2022.length);
      randomBooks.push(books2022[randomBookIndex]);
    }
    console.log(randomBooks);
  })
  .catch(function (error) {
    console.log("Error: " + error.message);
});

start();
