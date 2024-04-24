let answer;

function generateQuestion() {
    const number1 = Math.floor(Math.random() * 100 + 1);
    const number2 = Math.floor(Math.random() * 100 + 1);
    answer = number1 - number2;
    document.getElementById('question').innerText = `${number1} - ${number2} = ?`;
}

document.addEventListener('DOMContentLoaded', function() {
    generateQuestion();

    document.getElementById('answerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const userAnswer = parseInt(document.getElementById('answer').value, 10);
        if (userAnswer === answer) {
            document.getElementById('result').innerText = 'Correct';
        } else {
            document.getElementById('result').innerText = 'Incorrect. Try again!';
        }

        generateQuestion();
        document.getElementById('answer').value = '';
    });
});
