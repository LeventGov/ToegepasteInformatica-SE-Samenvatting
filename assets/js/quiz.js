const quizData = {
    title: '',
    questions: []
};

let currentQuestion = 0;
let score = 0;
let answers = [];

const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const questionNumber = document.getElementById('question-number');
const totalQuestions = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const explanationContainer = document.getElementById('explanation');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

function initQuiz(data) {
    quizData.title = data.title;
    quizData.questions = data.questions;
    totalQuestions.textContent = quizData.questions.length;
    displayQuestion();
}

function displayQuestion() {
    const question = quizData.questions[currentQuestion];
    
    questionNumber.textContent = currentQuestion + 1;
    questionText.textContent = question.question;
    
    const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;
    progressFill.style.width = progress + '%';
    
    answersContainer.innerHTML = '';
    explanationContainer.innerHTML = '';
    explanationContainer.style.display = 'none';
    
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.setAttribute('role', 'button');
        button.setAttribute('aria-label', `Antwoord ${letters[index]}: ${option}`);
        
        button.innerHTML = `
            <span class="answer-letter">${letters[index]}</span>
            <span>${option}</span>
        `;
        
        button.addEventListener('click', () => selectAnswer(index, button));
        answersContainer.appendChild(button);
    });
    
    updateNavigationButtons();
    
    if (answers[currentQuestion] !== undefined) {
        showPreviousAnswer();
    }
}

function selectAnswer(answerIndex, button) {
    const question = quizData.questions[currentQuestion];
    const isCorrect = answerIndex === question.correctAnswer;
    
    answers[currentQuestion] = {
        selectedAnswer: answerIndex,
        isCorrect: isCorrect
    };
    
    if (isCorrect && !answers[currentQuestion].scored) {
        score++;
        answers[currentQuestion].scored = true;
    }
    
    const allButtons = answersContainer.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    allButtons[question.correctAnswer].classList.add('correct');
    if (!isCorrect) {
        button.classList.add('incorrect');
    }
    
    showExplanation(isCorrect, question);
    
    nextBtn.disabled = false;
}

function showExplanation(isCorrect, question) {
    explanationContainer.style.display = 'block';
    
    const explanationTitle = isCorrect 
        ? '✅ Correct!' 
        : '❌ Helaas, dit is niet het juiste antwoord.';
    
    const explanationText = isCorrect 
        ? question.explanationCorrect 
        : question.explanationIncorrect;
    
    explanationContainer.innerHTML = `
        <div class="explanation-title">${explanationTitle}</div>
        <div class="explanation-text">${explanationText}</div>
    `;
    
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = `${explanationTitle} ${explanationText}`;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
}

function showPreviousAnswer() {
    const answer = answers[currentQuestion];
    if (answer) {
        const allButtons = answersContainer.querySelectorAll('.answer-btn');
        const question = quizData.questions[currentQuestion];
        
        allButtons.forEach(btn => btn.disabled = true);
        
        allButtons[question.correctAnswer].classList.add('correct');
        if (!answer.isCorrect) {
            allButtons[answer.selectedAnswer].classList.add('incorrect');
        }
        
        showExplanation(answer.isCorrect, question);
        nextBtn.disabled = false;
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function updateNavigationButtons() {
    prevBtn.disabled = currentQuestion === 0;
    
    if (answers[currentQuestion] !== undefined) {
        nextBtn.disabled = false;
        nextBtn.textContent = currentQuestion === quizData.questions.length - 1 
            ? 'Toon Resultaten' 
            : 'Volgende Vraag →';
    } else {
        nextBtn.disabled = true;
        nextBtn.textContent = 'Volgende Vraag →';
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const percentage = Math.round((score / quizData.questions.length) * 100);
    const totalAnswered = answers.filter(a => a !== undefined).length;
    const correct = answers.filter(a => a && a.isCorrect).length;
    const incorrect = totalAnswered - correct;
    
    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('score-message').textContent = getScoreMessage(percentage);
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('incorrect-count').textContent = incorrect;
    document.getElementById('total-answered').textContent = totalAnswered;
    
    const announcement = document.createElement('div');
    announcement.className = 'sr-only';
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.textContent = `Quiz voltooid! Je score is ${percentage}%. ${correct} correct, ${incorrect} incorrect van de ${totalAnswered} beantwoorde vragen.`;
    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
}

function getScoreMessage(percentage) {
    if (percentage === 100) return 'Perfect! Je beheerst de stof uitstekend! 🎉';
    if (percentage >= 80) return 'Geweldig! Je bent goed voorbereid! 🌟';
    if (percentage >= 60) return 'Goed gedaan! Nog wat herhaling en je zit goed! 👍';
    if (percentage >= 40) return 'Je bent op de goede weg, blijf oefenen! 📚';
    return 'Blijf studeren, je kunt het! 💪';
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = [];
    
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    
    displayQuestion();
}

nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', previousQuestion);
restartBtn.addEventListener('click', restartQuiz);

document.addEventListener('keydown', (e) => {
    if (quizContainer.style.display !== 'none') {
        if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            nextQuestion();
        } else if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            previousQuestion();
        } else if (e.key >= '1' && e.key <= '6') {
            const index = parseInt(e.key) - 1;
            const buttons = answersContainer.querySelectorAll('.answer-btn');
            if (buttons[index] && !buttons[index].disabled) {
                buttons[index].click();
            }
        }
    }
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initQuiz };
}
