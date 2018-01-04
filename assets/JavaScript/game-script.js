
	var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 0;
	var guessesSoFar = [];
	var computerGuess ="";

	function start() {
		computerGuess = choices[Math.floor(Math.random() * choices.length)];
		console.log(computerGuess);
		guessesLeft = 10
		guessesSoFar = []
	}  	
	
	document.onkeyup = function(event) {
							
		var userGuess = event.key.toLowerCase();

		guessesSoFar.push(userGuess)

		console.log(userGuess, computerGuess)
		if (userGuess === computerGuess) {
			wins++;
			guessesLeft--;
			guessesSoFar.length = 0;
			start()

    	} else if (userGuess !== computerGuess) {
    		losses++;
			guessesLeft--;
			guessesSoFar.length = userGuess.length;
			if (guessesLeft <= 0) {
				start();
			}
		
		}
		
		updateDisplay();
	
	};

	function updateDisplay() {
		document.getElementById("wins").innerHTML = wins; 
		document.getElementById("losses").innerHTML = losses; 
		document.getElementById("guessesLeft").innerHTML = guessesLeft; 
		document.getElementById("guessesSoFar").innerHTML = guessesSoFar; //not displaying in HTML correctly....trouble with appending the last guessed letter into the list.
	}


	start(); 
