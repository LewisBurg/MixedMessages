let golfCourse = ['Southend Golf Club', 'Thorpe hall', 'Rochford Hundred', 'Boyce Hill', 'Garons Golf Club'];

let score = ['over par', 'under par', 'level par'];

let weather = ['perfect calm sunny day for golf!', 'cloudy and windy day, good luck!', 'very cold day, wrap up.', 'sunny but windy day, keep it low!']

function getCourse(num){
    let index = num.length;
    let courseIndex = Math.floor(Math.random() * index)
    return courseIndex;
}

function getScore(num){
    let index = num.length;
    let scoreIndex = Math.floor(Math.random() * index)
    return scoreIndex;
}

function getWeather(num){
    let index = num.length;
    let weatherIndex = Math.floor(Math.random() * index)
    return weatherIndex;
}

function generateMessage() {
    return "Today you will be playing at " + golfCourse[getCourse(golfCourse)] + ". We think you're going to shoot " + score[getScore(score)] + " and it is a " + weather[getWeather(weather)];
}

console.log(generateMessage());

