let answer;
let correctCount = 0;
let incorrectCount = 0;

function generateQuestion() {
    const number1 = Math.floor(Math.random() * 100 + 1);
    const number2 = Math.floor(Math.random() * 100 + 1);

    //switch numbers to keep the value of the subtraction positive
    if(number2 > number1){
        let temp = number1;
        number1 = number2;
        number2 = temp;
    } else {
        answer = number1 - number2;
    }

    //display the question
    document.getElementById('question').innerText = `${number1} - ${number2} = ?`;
}

function updateCounters(correct){
    if(correct) {
        correctCount++;
        document.getElementById('correctCounter').innerText = correctCount;
    } else {
        incorrectCount++;
        document.getElementById('incorrectCounter').innerText = incorrectCount;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    generateQuestion();

    document.getElementById('answerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const userAnswer = parseInt(document.getElementById('answer').value, 10);
        if (userAnswer === answer) {
            document.getElementById('result').innerText = 'Correct';
            updateCounters(true);
        } else {
            document.getElementById('result').innerText = 'Incorrect. Try again!';
            updateCounters(false);
        }

        generateQuestion();
        document.getElementById('answer').value = '';
    });
});
