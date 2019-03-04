
// Just an alert to inform the user to press any Alpa keys to start the game
alert("Press any key to start!");

// List of word for the computer to choose from

var wordBank = ["Aberdeen", "Anacortes", "Auburn", "Bellevue", "Bellingham", "Bremerton", "Centralia", "Coulee Dam", "Coupeville", "Ellensburg", "Ephrata", "Everett", "Hoquiam", "Kelso", "Kennewick", "Longview", "Moses Lake", "Oak Harbor", "Olympia", "Pasco", "Point Roberts", "Port Angeles", "Pullman", "Puyallup", "Redmond", "Renton", "Richland", "Seattle", "Spokane", "Tacoma", "Vancouver", "Walla Walla", "Wenatchee", "Yakima"
];

var lettersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


// numver of max Guesses for the user
var maxGuess = 10;

var letterGuessed = [];
var guessingWord = [];
var numGuess;
var wins = 0;
var currentWord;
var isDone = false;
var wordToMatch;
var guessedLetterBox = document.getElementById("letterGuessed");
var lettersInTitle = [];
var numBlanks = 0;
 
document.onkeyup = function(event) {
    userGuess = event.key;
    // userGuess = [Math.floor(Math.random() *wordBank.length)];
    guessedLetterBox.innerHTML+=userGuess + "," + " ";
    console.log(guessedLetterBox)
    console.log(userGuess)
    
}

function gamereset() {
   numGuess = maxGuess;
   pauseGame = false;

   wordToMatch = wordBank[Math.floor(Math.random() * wordBank.length)];
   console.log(wordToMatch)

   guessedLetterBox = [];
   guessingWord = [];

   for (var i = 0, j=currentWord.length; i < j; i++) {
       if (wordToMatch[i] === " ") {
           guessingWord.push("_")
       } else {
           guessingWord.push("_")
       }
   }

    wordToMatch = wordBank [Math.floor(Math.random() * wordBank.length)];
    letterGuessed = wordBank.split(' ');
    numGuess = maxGuess;
    letterGuessed = maxGuess;
    console.log(currentWord);
    numBlanks = lettersInTitle.length;
    alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    letterGuessed = 0;
    maxGuess = 10;
    guessedLetterBox = [];
    test=false;
    startgame();
}


function setup() {
   
    function checkForLetter(letter) {
        var foundLetter = false;
        
        for (var i = 0, j = wordToMatch.length; i<j; i++) {
            if (letter === wordToMatch[i]) {
                guessingWord[i] = letter;
                foundLetter =true;

                if (guessingWord.join("") === wordToMatch) {
                    wins++;
                    pauseGame = true;
                    updateDisplay();
                    
                }
            }
        }
    }
};

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = guessingWord.join("");
    document.getElementById("remainingGuesses").innerText = numGuess;
    document.getElementById("letterGuessed").innerText = letterGuessed.join("");
}
