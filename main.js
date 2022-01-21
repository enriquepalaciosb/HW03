//Show movies within array
function showMovie() {
        console.log(moviesArray);
        let message = "Title  Year Released Rating\n";
        for (i = 0; i < moviesArray.length; i++) {
            message = message + moviesArray[i].oMovieTitle + "  " + moviesArray[i].oYearReleased + "  " + moviesArray[i].oMovieRating + "\n";
        }
        document.getElementById("output").value = message;
}
// Loading the array
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
    } else if (userRating >= 6) {
        alert('Please enter a number between 1 & 5 :)');
    } else {
        let MovieReview = {
            oMovieTitle:  movieTitle,
            oMovieRating: userRating,
            oYearReleased: yearReleased,
        }
        moviesArray.push(MovieReview);
    } 
}
