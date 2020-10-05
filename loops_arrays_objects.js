var sports = ['football', 'tennis', 'rugby'];

// var numberOfElements = sports.length;
// console.log("number of elements: ", numberOfElements);

// var firstSport = sports[0]
// console.log("first sport:", firstSport);

sports.push('curling');
sports.push('snooker');
sports.push('darts');
// console.log("Sports:", sports);

// var removed_element = sports.pop();
// console.log("Sports:", sports);
// console.log(removed_element);

// var removedSport = sports.shift();
// console.log("Removed Sports:", removedSport);

// sports.unshift('basketball');
// console.log("Sports:", sports);

// var removedSport = sports.splice(3, 1);
// console.log(removedSport);
// console.log("Sports:", sports);

// for (var currentSport of sports) {
//     var upperCasedSport = currentSport.toUpperCase();
//     console.log(upperCasedSport);
// }

//for (initialised counter, condition, increment)
// for (var i=0; i < sports.length; i++) {
//     var currentSport = sports[i]
//     var upperCasedSport = currentSport.toUpperCase();
//     console.log(upperCasedSport);
// }



var movie = {
    title: "It's a Wonderful Life",
    year: 1946,
    language: "Spanish"
};

movie.cast = ["James Stewart", "Donna Reed"];
// Or langage can be changes movie["language"]
movie.language = "English";
movie["subtitle-language"] = "German";

// delete movie.year;

// console.log("Movie:", movie);

movie.ratings = {
    critic: 94,
    audience: 95
}

var audienceRating = movie.ratings.audience
console.log(audienceRating);

//for of - Arrays
//for in - Objects
for( var key in movie){
    var value = movie[key]
    console.log(`The ${key} is ${value}`);
}

var keys = Object.keys(movie)
console.log('Keys:', keys);