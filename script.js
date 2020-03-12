const subjects = [ 'ball', 'cap', 'beach', 'hat', 'sun'];
const prepositions = [ 'under', 'over', 'in', 'out', 'beside'];
const modifiers = [ 'hearing', 'singing', 'dancing', 'playing', 'swinging'];
const objects = [ 'cat', 'dog', 'puppy', 'lion', 'tiger'];
const punctuations = [ '.', '?', '!', '...', '!!?'];



function randomWord(wordArray){
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];
    return word
};
function myFunction(){
var sentence = randomWord(subjects) + ' ' + randomWord( prepositions) + ' ' + randomWord(modifiers) + ' ' + randomWord(objects) + ' ' + randomWord(punctuations) 
document.getElementById("sentence").innerHTML = sentence; 
};

window.setInterval(function() {
    myFunction();
    // Run your function here
}, 4000);
myFunction();

console.log(randomWord);