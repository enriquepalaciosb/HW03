// Loading the array
let moviesArray = []; 
//Show movies within array
    function showMovie() {
            let message = "Title & Rating\n";
            for (i = 0; i < moviesArray.length; i++) {
                message = message + moviesArray[i].title + ", " + moviesArray[i].rating + "/5 \n";
            }
            document.getElementById("show").value = message;
    }
//Make sure that you tell the user which field is empty
    function addMovie() {
        if (moviesArray.length >= 10) {
            alert("Whoops, you only get ten movies.");
            return;
        } 
        //Getting the flicks from the elements
        let movieTitle = document.getElementById("title").value.trim();
        let yearReleased = document.getElementById("year").value.trim();
        let userRating = document.getElementById("rating").value.trim();
        //Creates a blank so the user can enter up to ten flicks
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        document.getElementById("rating").value = "";
        //Validation for the form section
        if (movieTitle === "") {
            alert("Please, enter a title :)");
        } else if (yearReleased === "") {
            alert("Please, enter the year :)");
        } else if (userRating === "") {
        alert("Please, enter your rating :)");
        } else if (userRating >= 6 || userRating < 1) {
            alert("Please enter a number between 1 & 5 :)");
        } else if (movieTitle === "" || yearReleased === "" || userRating === "" ) {
            alert("Please, fill out the empty fields :)");
        } else {
            let Movie = {
                title: movieTitle,
                rating: userRating,
                year: yearReleased
            }
            moviesArray.push(Movie);
        } 
    }