$(document).ready(onReady);

let randomPerson = "";

function onReady() {

    chooseRandomPerson();

    fillPhotoGrid();

    $('body').on('click', '.guess', checkGuess);

}

function chooseRandomPerson() {
    randomPerson = people[randomNumber(0, people.length - 1)].name;
    $('#target').html(`<span>Click on: ${randomPerson}</span>`);
}

function fillPhotoGrid() {
    for (let person of people) {
        $('body').append(
            `<img class="guess" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">`
        );
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function checkGuess() {
    if ($(this)[0].alt.split(' ').pop() === randomPerson) {
        alert('Yeah! that\'s right! On to the next...');
        chooseRandomPerson();
    } else {
        alert('nope... try again');
    };


}
