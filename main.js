// Loading the array
let moviesArray = []; 
//Show movies within array
    function showMovie() {
            let message = "Title \t \t Year Released \t \t Rating\n";
            for (i = 0; i < moviesArray.length; i++) {
                message = message + moviesArray[i].title + "\t \t" + moviesArray[i].year + "\t \t" + moviesArray[i].rating + "\n";
            }
            document.getElementById("show").value = message;
    }
//Make sure that you tell the user which field is empty
    function addMovie() {
        if (moviesArray.length >= 10) {
            alert("Whoops, you only get ten movies.");
            return;
        } 
        let movieTitle = document.getElementById("title").value.trim();
        let yearReleased = document.getElementById("year").value.trim();
        let userRating = document.getElementById("rating").value.trim();
        //Creates a blank so the user can enter up to ten flicks
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        document.getElementById("rating").value = "";
        //VALIDATION 
        if (movieTitle === "" || yearReleased === "" || userRating === "" ) {
            alert("Please, fill out the empty fields :)");
        } else if (movieTitle === "") {
            alert("Please, enter a title :)");
        } else if (yearReleased === "") {
            alert("Please, enter the year :)");
        } else if (userRating === "") {
        alert("Please, enter your rating :)");
        } else if (userRating >= 6) {
            alert("Please enter a number between 1 & 5 :)");
        } else {
            let Movie = {
                title: movieTitle,
                rating: userRating,
                year: yearReleased
            }
            moviesArray.push(Movie);
        } 
    }