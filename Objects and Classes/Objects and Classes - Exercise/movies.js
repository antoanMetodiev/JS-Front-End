function solve(input) {
    const movieList = [];   // listWithObjects
    let endIndex = 0;
    let movieName = 0;
    let date = 0;
    let isIncluded = null;

    for (const movieInfo of input) {
        if (movieInfo.includes('addMovie')) movieList.push({ name: movieInfo.substring(9) });
        else if (movieInfo.includes('directedBy')) {
            endIndex = movieInfo.indexOf('directedBy');
            movieName = movieInfo.substring(0, endIndex - 1)
            director = movieInfo.substring((endIndex + 11));
            isIncluded = getIndexOfObjectWithThatName(movieName);

            if (isIncluded + 1) movieList[isIncluded].director = director;

        } else if (movieInfo.includes('onDate')) {
            endIndex = movieInfo.indexOf('onDate');
            movieName = movieInfo.substring(0, endIndex - 1)
            date = movieInfo.substring((endIndex + 7));
            isIncluded = getIndexOfObjectWithThatName(movieName);

            if (isIncluded + 1) movieList[isIncluded].date = date;
        }
    }

    /// OUTPUT:
    // every movie need to have: (name, director, date) properties to be parsed to JSON! 
    for (const movie of movieList) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director')
            && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    }

    function getIndexOfObjectWithThatName(movieName) {
        for (let i = 0; i < movieList.length; i++) {
            if (movieList[i].name == movieName) return i;
        }
        return undefined;
    }
}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);