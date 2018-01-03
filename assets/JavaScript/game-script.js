
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;
	var guessesSoFar = [];
	
	document.onkeyup = function(event) {
							
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		guessesSoFar.push(userGuess);


		if (userGuess === computerGuess) {
			wins++;
			guessesLeft = 9
			guessesSoFar.length = 0

    	} else if (guessesLeft == 0) {
    		losses++
    		guessesLeft = 9;
    		guessesSoFar.length = 0
    	
    	} else if (userGuess !== computerGuess) {
			guessesLeft--;
		
		}
	
	var html = "<h3>Can you guess which letter I am thinking of?</h3>" +
		
		"<h4>Type any lowercase letter a-z to see!</h4>" +

		"<p>Wins: " + wins + "</p>" +
	    
		"<p>Losses: " + losses + "/p>" +
	    
		"<p>Guesses you have left: " + guessesLeft + "</p>" +
	     
		"<p>Letters you have guessed so far: " + guessesSoFar + "</p>";
		}
	};

	 document.getElementById("#game").innerHTML = html
