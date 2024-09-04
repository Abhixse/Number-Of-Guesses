let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrong = document.querySelector('.wrong');
let guesses = document.getElementById('guesses')


let answer = Math.floor(Math.random() * 100) + 1;
let numGuesses =  0;
btn.addEventListener('click', ()=>{
    guessesNumber();
})

function guessesNumber(){
    if(input.value < 1 || input.value > 100 || isNaN(input.value)){
        wrong.innerHTML = "Enter between 1 to 100";
    }
    else {
        numGuesses++;
        guesses.innerHTML = `No of Guess : ${numGuesses}`;

        if(input.value > answer){
            wrong.innerHTML = "Yoou Guess Too High!"
            input.innerHTML = "";
        }
        else if(input.value < answer){
            wrong.innerHTML = "You Guess too Low!";
            input.value = "";
        }
        else {
            wrong.innerHTML = "Congratulation You guesses the correct answer";
            btn.disable = true;
            setTimeout(()=> {
                resetGame();
            },5000)
        }
    }
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    btn.disable = false;
    guesses.innerHTML =`No of Guess : 0`;
}