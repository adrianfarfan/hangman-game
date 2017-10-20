// Global Variables
// ======================================================
// Create an array of words
var word = ['fat', 'lazy', 'hungry',];
// Choose word randomly
var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

// Dom Manipulation 
var docUnderScore = document.getElementsByClassName('rightGuess');

var docWrongGuess = document.getElementsByClassName('wrongGuess');

// Main
// ======================================================
console.log(chosenWord); 

// Create underscores based on length of word
var generateUnderscore = () => {
	for (var i = 0; i < chosenWord.length; i++){
		underScore.push('_');
	}
	return underScore;
}


// Get users guess
document.addEventListener('keypress', function(event){
	var keyword = String.fromCharCode(event.keyCode);
// If user guesses it right	
	if(chosenWord.indexOf(keyword) > -1){
	// Add to the right words array 
		rightWord.push(keyword);
	// Replace underscore with the right letter
		underScore[chosenWord.indexOf(keyword)] = keyword;
		docUnderScore[0].innerHTML = underScore.join('');
		docRightGuess[0].innerHTML = rightWord.join('');
	// Check to see if user word matches guesses
	if(underScore.join('') == chosenWord){
		alert('You Win');
		}
}	
	else {
		wrongWord.push(keyword);
		docWrongGuess[0].innerHTML = wrongWord.join('')
	}
});

docUnderScore[0].innerHTML = generateUnderscore().join();

