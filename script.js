var genreEl = document.querySelector('#genre');
var genreSearchEl = document.querySelector('#genreSearch');
var yearSearchEl = document.querySelector('#authorSearch')
var yearEl = document.querySelector('#author-bio');
var resutlsEl = document.querySelector('#results');
var searchBtnEl = document.querySelector('#searchBtn-1');
var searchBtnE2 = document.querySelector('#searchBtn-2');






// starting the API call fuction 



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


    searchBtnEl.addEventListener('click', function () {

        const bookGenre = genreSearchEl.value;

        if (bookGenre !== '') {

            console.log(bookGenre);
        } else {
            return;
        }

    });


}

genreSearch();


// basic click event for the year search 

function authorBio() {

    searchBtnE2.addEventListener('click', function () {

        const authBio = yearSearchEl.value;

        if (authBio !== '') {
            console.log(authBio);

        } else {
            return;
        }

    });
}

authorBio();






