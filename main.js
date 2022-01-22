//Show movies within array
    function showMovie() {
            let message = "Title  Year Released Rating\n";
            for (i = 0; i < moviesArray.length; i++) {
                message = message + moviesArray[i].title + "  " + moviesArray[i].year + "  " + moviesArray[i].rating + "\n";
            }
            document.getElementById("show").value = message;
    }
// Loading the array
let moviesArray = []; 
moviesArray.length = 10;
//Make sure that you tell the user which field is empty
    function addMovie() {
        let movieTitle = document.getElementById("title").value.trim();
        let yearReleased = document.getElementById("year").value.trim();
        let userRating = document.getElementById("rating").value.trim();
        //VALIDATION 
        if (movieTitle === '' || yearReleased === '' || userRating === '' ) {
            alert('Please, fill out the empty fields :)');
        } else if (userRating >= 6) {
            alert('Please enter a number between 1 & 5 :)');
        } else {
            // o = object
            let Movie = {
                title: movieTitle,
                rating: userRating,
                year: yearReleased
            }
            moviesArray.push(Movie);
        } 
    }
