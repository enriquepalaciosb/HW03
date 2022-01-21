//LOADING ARRAY CONTENT
document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("experience").disabled = true;

    document.getElementById("show").addEventListener("click", function () {
        console.log(PersonArray);
        let message = "Name  City\n";
        for (i = 0; i < PersonArray.length; i++) {
            message = message + PersonArray[i].name + "  " + PersonArray[i].city + "\n";
        }
        document.getElementById("output").value = message;
    });
});
// MOVIES ARRAY AND OBJECT
moviesArray = []; 
moviesArray.length = 10;
//Make sure that you tell the user which field is empty
function addMovie() {
    let movieTitle = document.getElementById("movieTitle").value.trim();
    let yearReleased = document.getElementById("yearReleased").value.trim();
    let userRating = document.getElementById("userRating").value.trim();
    //VALIDATION 
    if (movieTitle === '' || yearReleased === '' || userRating === '' ) {
        alert('Please, fill out the empty fields :)');
    } else if (userRating >= 5) {
        alert('Please enter a number between 1 & 5 :)');
    } else {
        let MovieReview = {
            movieTitle:  movieTitle,
            movieRating: userRating,
            yearReleased: yearReleased,
        }
        moviesArray.push(MovieReview);
    } 
}
