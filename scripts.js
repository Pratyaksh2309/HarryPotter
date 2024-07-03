const questions = [
    {
        question: "What house was Harry Potter sorted into?",
        options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
        answer: "Gryffindor"
    },
    {
        question: "What is the name of Harry Potter's owl?",
        options: ["Hedwig", "Errol", "Pigwidgeon", "Scabbers"],
        answer: "Hedwig"
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        options: ["Seeker", "Keeper", "Chaser", "Beater"],
        answer: "Seeker"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz-container');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `Question ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionText);

        q.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(index, option);
            questionDiv.appendChild(button);
        });

        const result = document.createElement('p');
        result.classList.add('result');
        result.id = `result-${index}`;
        questionDiv.appendChild(result);

        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswer(questionIndex, answer) {
    const resultElement = document.getElementById(`result-${questionIndex}`);
    if (answer === questions[questionIndex].answer) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Incorrect. Try again!';
        resultElement.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', loadQuiz);

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});