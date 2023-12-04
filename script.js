var genreEl = document.querySelector("#genre");
var genreSearchEl = document.querySelector("#genreSearch");
var yearSearchEl = document.querySelector("#authorSearch");
var yearEl = document.querySelector("#author-bio");
var resutlsEl = document.querySelector("#results");
var searchBtnEl = document.querySelector("#searchBtn-1");
var searchBtnE2 = document.querySelector("#searchBtn-2");
// var for the google book embedded viewer

// starting the API call function

function getData(title) {

  var apiUrl = 'https://openlibrary.org/search.json?title=' + title + '&limit=1'
  fetch(apiUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);


      for (var i = 0; i < data.docs.length; i++) {
        console.log(data.docs[i]);

        var genreResults = document.createElement('p');
        genreResults.textContent = genreSearchEl.value;
        resutlsEl.appendChild(genreResults);

        if (!data.docs || data.docs.length === 0) {
          genreSearchEl.textContent = "No Results Found";
          return;
        }


      }


    });
};


searchBtnEl.addEventListener('click', function () {
  var title = genreSearchEl.value;
  getData(title);
});

// basic click event for the genre search

// function genreSearch() {
//   searchBtnEl.addEventListener("click", function () {
//     const bookGenre = genreSearchEl.value;

//     if (bookGenre !== "") {
//       console.log(bookGenre);
//     } else {
//       return;
//     }
//   });
// }

// genreSearch();

// basic click event for the year search

// function authorBio() {
//   searchBtnE2.addEventListener("click", function () {
//     const authBio = yearSearchEl.value;

//     if (authBio !== "") {
//       console.log(authBio);
//     } else {
//       return;
//     }
//   });
// }

// authorBio();

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

start();

// for LOC API CALL maybe
// // Const = "Year" (change year to input value)
// fetch(`https://www.loc.gov/search/?q=books&fo=json&dates=${year}`)
//   .then(response => response.json())
//   .then(data => {parse data in to our app}
//   console.log(data);
//     )
//     .catch(error => console.log(error));
