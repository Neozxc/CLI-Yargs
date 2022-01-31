const yargs = require("yargs");

const { Movie, movieArr } = require("./utils");

const app = (args) => {

    if (args.add) {
        const movie = new Movie(args.movie, args.actor);
        movie.add();
        console.log(movieArr);
    } else if (args.multiple) {
        const movie = new Movie(args.movie, args.actor, args.year, args.age);
        movie.add()
        console.log(movieArr);
    }

};

app(yargs.argv);
