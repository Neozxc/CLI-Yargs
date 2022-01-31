const movieArr = [];

class Movie {

    constructor(title, actor = "N/A") {
        this.title = title;
        this.actor = actor;
    };

    add() {
        movieArr.push(this);
    };

};

module.exports = {
    Movie,
    movieArr
}