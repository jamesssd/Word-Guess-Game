
    // Just an alert to inform the user to press any Alpa keys to start the game
    alert("Press any key to start!");

    // List of word for the computer to choose from

    var wordBank = ["Aberdeen", "Anacortes", "Auburn", "Bellevue", "Bellingham", "Bremerton", "Centralia", "Coulee Dam", "Coupeville", "Ellensburg", "Ephrata", "Everett", "Hoquiam", "Kelso", "Kennewick", "Longview", "Moses Lake", "Oak Harbor", "Olympia", "Pasco", "Point Roberts", "Port Angeles", "Pullman", "Puyallup", "Redmond", "Renton", "Richland", "Seattle", "Spokane", "Tacoma", "Vancouver", "Walla Walla", "Wenatchee", "Yakima"
    ];

    // numver of max Guesses for the user
    const maxGuess = 10;

    maxGuess--;

    var letterGuessed = []
    var guessingWord = []
    var wordToMatch
    var numGuess
    var wins = 0 

    document.onkeypress = function(event) {
        if (Alpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase))
        }
    }

    for (var i=0, j = wordToMatch.length; i<j; i++) {
        if (letter === wordToMatch[i]) {
            guessingWord[i] = letter
            found letter = true
            
            if (guessingWord.join("") === wordToMatch) {
                wins++
                pauseGame = true
                updateDisplay(
                    setTimeout(resetGame,5000)
                )
            }
        }
    } 

    if (!letterGuessed.includes(letter)) {
        letterGuessed.push(letter)
        numGuess--
    }
    if (numGuess === 0) {
        guessingWord = wordToMatch.split()
        pauseGame = true
        setTimeout(resetGame, 5000)
    }

    updateDisplay();

    fuction Alpha(ch) {
        return /^[A-Z]$i.test(ch);
    }

    function resetGame() {
        numGuess = maxGuess
        pauseGame =false
    }
    
    wordToMatch = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase(
        console.log(wordToMatch)

        letterGuessed = []
        guessingWord = []

        for (var i=0, j=wordToMatch.length; i < j; i++) {
            if (wordToMatch[i] === "") {
                guessingWord.push("")
            } else {
                guessingWord.push("_")
            }
        }

    )

    function updateDisplay() {
        document.getElementById("totalWins").innerText = wins
        document.getElementById("currentWord").innerText = guessingWord.join("")
        document.getElementById("remainingGuess").innerText = numGuess
        document.getElementById("letterGuessed").innerText = letterGuessed.join("")
    }
}
