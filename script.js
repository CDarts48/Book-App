var genreEl = document.querySelector('#year');
var yearSearchEl = document.querySelector('#yearSearch');
var yearSearchEl = document.querySelector('#authorSearch')
var yearEl = document.querySelector('#author-bio');
var resutlsEl = document.querySelector('#results');
var searchBtnEl = document.querySelector('#searchBtn-1');
var searchBtnE2 = document.querySelector('#searchBtn-2');






// starting the API call fuction 



function getData(year) {

   var apiUrl = 'https://www.loc.gov/search/?q=books&fo=json&dates=${year}'

    fetch(apiUrl) 
    .then(response => {
        return response.json();
        })
      .then(data => {
        console.log(data);

        for (var i = 0; i < data.length; i++) {

            resutlsEl.textContent = data[i].results;
        }    

            
        });
    }
     
    
searchBtnEl.addEventListener('click', function() {
    var year = genreSearchEl.value;
    getData(year);
}); 
















// loop over the data and create a list of books by author

// for (var i = 0; i < data.length; i++) {

//     var bookList = document.createElement('td'); 
//     var bookRow = document.createElement('tr'); 


//     resutlsEl.appendChild(bookList); 
//     bookList.appendChild(bookRow);

// }




    







//basic click event for the genre search 

// function genreSearch() {


//     searchBtnEl.addEventListener('click', function () {

//         const bookGenre = genreSearchEl.value;

//         if (bookGenre !== '') {
//             console.log(bookGenre);

//         } else {
//             return;
//         }

//     });


// }


// genreSearch();


// // basic click event for the year search 

// function authorBio() {

//     searchBtnE2.addEventListener('click', function () {

//         const authBio = yearSearchEl.value;

//         if (authBio !== '') {
//             console.log(authBio);

//         } else {
//             return;
//         }

//     });
// }

// authorBio();



















// const apiKey = "AIzaSyAg_vIE7Oue7sQBYZR4tScNEwAtvAJdFNg";
// console.log(apiKey);

// Google Books API call
// sintax for the api call note saves app size
// Option 2: Use gapi.client.request
// A more general way to make requests is to use gapi.client.request. Your application does not have to load the Discovery Document as in the first option, but it must still set the API key (and auth for some APIs). While you need to manually fill in REST parameters with this option, it saves one network request and reduces application size.

// <script src="https://apis.google.com/js/api.js"></script>
// <script>
// function start() {
//   // 2. Initialize the JavaScript client library.
//   gapi.client.init({
//     'apiKey': 'YOUR_API_KEY',
//     // clientId and scope are optional if auth is not required.
//     'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//     'scope': 'profile',
//   }).then(function() {
//     // 3. Initialize and make the API request.
//     return gapi.client.request({
//       'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
//     })
//   }).then(function(response) {
//     console.log(response.result);
//   }, function(reason) {
//     console.log('Error: ' + reason.result.error.message);
//   });
// };
// // 1. Load the JavaScript client library.
// gapi.load('client', start);
// </script>

// for LOC API CALL
// // Const = "Year" (change year to input value)
// fetch(`https://www.loc.gov/search/?q=books&fo=json&dates=${year}`)
//   .then(response => response.json())
//   .then(data => {parse data in to our app}
//   console.log(data);
//     )
//     .catch(error => console.log(error));





