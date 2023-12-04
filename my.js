var genreInput = document.querySelector("#genre")
var authorInput = document.querySelector("#author")
var yearInput = document.querySelector("#yearSearch")
var isbnInputEl = document.querySelector("#isbn")
var bookResult = document.querySelector("#book-info")
var authorBio = document.querySelector("#author-info")
var resultsEl = document.querySelector("#rsltcont")



// calls the LOC and displays it on Console.log 
//function foo(bookObject) {
//     localStorage.setItem("bookObject", JSON.stringify(bookObject));
//     start();
//   }
//   fetch("https://www.loc.gov/books/?q=books&fo=json&date=${2022}")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       const results = data.results;
//       console.log(results); // Check the value of 'results'
//       // const books = results.filter(result => result.type && result.type.includes('book'));
//       foo(results[20]);
//       console.log(books);
//     })
//     .catch(function (error) {
//       console.log("Error: " + error.message);
//       const books2022 = books.filter((result) => result.date === "2022");
//       const randomBooks = [];
//       for (let i = 0; i < 100; i++) {
//         const randomBookIndex = Math.floor(Math.random() * books2022.length);
//         randomBooks.push(books2022[randomBookIndex]);
//       }
//       console.log(randomBooks);
//     })
//     .catch(function (error) {
//       console.log("Error: " + error.message);

//     displayData(results);
// });

// var displayData = function (_results) {
//   var locGenre = document.createElement('div');
//   locGenre.classList.add("genreResponse");
// }

// function locSubmitHandler(event) {
//   event.preventDefault();

//   var genreForLoc = document.querySelector('#genreSearch').value.trim();

//   if (genreForLoc) {
//     getlocData(genreForLoc);
//   }
// };

// var getlocData = function foo(bookObject) {
//       localStorage.setItem("bookObject", JSON.stringify(bookObject));
//       start();
//     }
//     fetch("https://www.loc.gov/books/?q=books&fo=json&date=${2022}")
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         const results = data.results;
//         console.log(results); // Check the value of 'results'
//         // const books = results.filter(result => result.type && result.type.includes('book'));
//         foo(results[20]);
//         console.log(books);
//       })
//       .catch(function (error) {
//         console.log("Error: " + error.message);
//         const books2022 = books.filter((result) => result.date === "2022");
//         const randomBooks = [];
//         for (let i = 0; i < 100; i++) {
//           const randomBookIndex = Math.floor(Math.random() * books2022.length);
//           randomBooks.push(books2022[randomBookIndex]);
//         }
//         console.log(randomBooks);
//       })
//       .catch(function (error) {
//         console.log("Error: " + error.message);

//         displayData(data);
// });


function isbnSubmitHandler(event) {
    event.preventDefault();
    var isbnNumber = document.querySelector("#isbnNumber").value.trim();

    if (isbnNumber) {
        getIsbnData(isbnNumber);
    }
};

var getIsbnData = function (isbnNumber) {
    var apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + isbnNumber;

    resultsEl.textContent = "";

    fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(function(data) {
        displayBook(data, isbnNumber);
    })
};


function displayBook(data, _isbnNumber) {
    resultsEl.innerHTML = ""; 

    const book = data.items[0].volumeInfo;

    const bookDiv = document.createElement('div');
    bookDiv.className = "book";

    const titleElement = document.createElement('h4');
    titleElement.textContent = "Title: " + book.title;
    bookDiv.appendChild(titleElement);
    
    const authorInfo = document.createElement('h6');
    authorInfo.textContent = "Author(s): " + book.authors;
    bookDiv.appendChild(authorInfo);

    const bookDesc = document.createElement('p');
    bookDesc.textContent = book.description;
    bookDiv.appendChild(bookDesc);

    resultsEl.appendChild(bookDiv);
}






// genreInput.addEventListener('submit', genreSubmitHandler);
// authorInput.addEventListener('submit', authorSubmitHandler);
document.querySelector("#searchBtn-3").addEventListener('click', isbnSubmitHandler);
//add locSubmitHandler to above code. 
