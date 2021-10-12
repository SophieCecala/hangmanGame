let words = ['javascript', 'apple', 'fish', 'monkey', 'fantastic', 'work', 'beautiful', 'wednesday', 'book', 'always'];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
let remainingLetters = word.length;


let guessesRemaining = 10;
while (remainingLetters > 0 && guessesRemaining > 0){
    alert(answerArray.join(""));
    let guess = prompt("Guess a letter, or click cancel to stop playing");
    guess = guess.toLowerCase();
    if(answerArray.indexOf(guess)=== -1){
        guessesRemaining -= 1;
        if (guess === null){
            break;
        }else if (guess.length !== 1){
            alert('please enter a single letter.')
        }else {
            for(let j = 0; j < word.length; j++){
                if ( word[j] === guess){
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
        }
    }
}

alert(answerArray.join(""));
alert("Good job! The answer was " + word);

