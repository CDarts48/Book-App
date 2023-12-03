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

function description(data) {
  const descriptionEl = document.querySelector("#results p");

  if (data.items && data.items.length > 0) {
    const item = data.items[0];
    if (item.volumeInfo.description) {
      const description = item.volumeInfo.description;
      descriptionEl.textContent = description;
    } else {
      descriptionEl.textContent = "Description Not Found";
    }
  } else {
    descriptionEl.textContent = "No Results Found";
  }
}

function authors(data) {
  const authorsEl = document.querySelector(".authors");

  if (data.volumeInfo.authors) {
    const authors = data.volumeInfo.authors;
    authorsEl.textContent = authors;
  } else {
    authorsEl.textContent = "Authors Not Found";
  }
}

function previewLink(data) {
  const previewLinkEl = document.querySelector(".preview-link");

  if (data.volumeInfo.previewLink) {
    const previewLink = data.volumeInfo.previewLink;
    const title = data.volumeInfo.title;
    previewLinkEl.innerHTML = `<a href="${previewLink}" target="_blank">${title}</a>`;
  } else {
    previewLinkEl.textContent = "Preview Link Not Found";
  }
}

function foo(bookObject) {
  localStorage.setItem("bookObject", JSON.stringify(bookObject));
  start();
}
fetch(`https://www.loc.gov/books/?q=books&fo=json&date=${2022}`)
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

function start() {
  const bookObject = JSON.parse(localStorage.getItem("bookObject"));
  console.log("bookObject.title", bookObject.title);
  const title = bookObject.title.replace(/ /g, "%20");
  console.log(
    `url: https://www.googleapis.com/books/v1/volumes?q=${title}&projection=lite`
  );

  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${title}&projection=lite`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      authors(data);
      description(data);
      previewLink(data);
    })
    .catch(function (error) {
      console.log("Error: " + error.message);
    });
}

// used learning assistant to develope lines 97-128
// start();

// for LOC API CALL maybe
// // Const = "Year" (change year to input value)
// fetch(`https://www.loc.gov/search/?q=books&fo=json&dates=${year}`)
//   .then(response => response.json())
//   .then(data => {parse data in to our app}
//   console.log(data);
//     )
//     .catch(error => console.log(error));
