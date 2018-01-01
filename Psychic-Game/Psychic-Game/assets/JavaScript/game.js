
var wins = 0;
	var losses = 0;
	var guessesLeft = 0;
	var guessesSoFar = 0;
	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" "n", "o", "p", "q", "r", "s"]
						, "t", "u", "v", "w", "x", "y", "z"];
document.onKeyUp = function(event){
	
	var userGuess = event.key;

	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


	if (userGuess === computerGuess) {
	wins++;
    } else if (userGuess !== computerGuess) {
	losses++;
	}


	var html =   
		"<p>Wins: " + wins + "</p>" +
		"<p>Loss: " + Losses + "/p>" +
		"<p>Guesses you have left: " + GuessesLeft + "</p>" +
		"<p>Letters you have guessed so far: " + guessesSoFar + "</p>" +;


	 document.getElementById("#index").innerHTML = html;

	}
};