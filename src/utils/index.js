const movieArr = [];

class Movie {

    constructor(title, actor, year = "N/a", age = "N/a") {
        this.title = title;
        this.actor = actor;
        
        // For the task
        
        this.year = year;
        this.age = age;
    };

    add() {
        movieArr.push(this);
    };

};

module.exports = {
    Movie,
    movieArr
}