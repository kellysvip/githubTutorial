let secretNumber;
let lastGuess;
let guessesRemaining = 10;
let pastGuess = []

const CORRECT_MESSAGE = "Correct! You must be a powerful psychic.";
const INCORRECT_MESSAGE = "Incorrect. You are merely a normal human.";


function generateNumber() {

	// MILESTONE 2: Right now the secret number is always 5. Change this
	// to return a secret number between 1 and 10. 
	secretNumber = Math.floor(Math.random() * 10) + 1;
	console.log(secretNumber)
	return secretNumber;
}




function makeGuess() {
	if (!secretNumber) {
		generateNumber();
	}
	// MILESTONE 3: ADD CODE HERE to pop up a dialog box
	// asking the user for a number.
	let x

	while (true) {
		x = prompt("Choose your lucky number: ");
		x = parseInt(x)

		if (!isNaN(x) && x >= 1 && x <= 10) {
			break;
		}

		alert("Number from 1 to 10");
	}

	if (pastGuess.includes(x)) {
		alert('Guessed Number')
	} else {
		lastGuess = x;
		pastGuess.push(x)
	}

	//--------------------------------------------
	updatePage();
	return lastGuess;
}

function checkIsCorrect() {
	if (secretNumber === lastGuess)
		return true;

	return false;
	// MILESTONE 4: Right now every guess will be true. Change
	// the above code so it checks to make sure lastGuess
	// is equal to secretNumber.5
}
// Don't worry about this part! Feel free to play around,
// but we'll teach you all about how JavaScript and HTML
// work together in the next section. If you're done Milestone
// 5, you'll need to fiddle around in here a bit.

function updatePage() {
	document.getElementById("last-guess").innerHTML = lastGuess;
	const wrColor = document.getElementById("correct").classList
	const correct = document.getElementById("correct");
	const remaining = document.getElementById("guesses-remaining");
	const guessedNum = document.getElementById("guessed-num")
	const isCorrect = checkIsCorrect();


	guessedNum.innerHTML = pastGuess.join(' - ')
	guessesRemaining--
	if (pastGuess.length === 10) {
		alert('Your turn is over!')
		guessesRemaining++
		location.reload()
	}
	remaining.innerHTML = guessesRemaining;
	if (isCorrect) {
		correct.innerHTML = CORRECT_MESSAGE;
		wrColor.remove("red")
		wrColor.add("green")
		setInterval(() => {
			location.reload()

		}, 5000);

	} else {
		correct.innerHTML = INCORRECT_MESSAGE;
		wrColor.add("green")
		wrColor.add("red")

	}
}



