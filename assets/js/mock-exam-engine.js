const quizData = { title: '', questions: [] };
let currentQuestion = 0; 
let score = 0; 
let answers = [];
let startTime = null;
let timerInterval = null;
let elapsedSeconds = 0;
const optionOrder = {};
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
const timerDisplay = document.getElementById('timer');

function startTimer(){
    startTime = Date.now();
    timerInterval = setInterval(function(){
        elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        timerDisplay.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }, 100);
}

function stopTimer(){
    if(timerInterval) clearInterval(timerInterval);
}

function formatTime(seconds){
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return (minutes < 10 ? '0' : '') + minutes + ':' + (secs < 10 ? '0' : '') + secs;
}

function initQuiz(data){ 
    quizData.title = data.title; 
    quizData.questions = data.questions; 
    totalQuestions.textContent = quizData.questions.length; 
    startTimer();
    displayQuestion(); 
}
function shuffleArray(arr){
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function displayQuestion(){
    const question = quizData.questions[currentQuestion];
    questionNumber.textContent = currentQuestion + 1;
    questionText.textContent = question.question;
    const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;
    progressFill.style.width = progress + '%';
    answersContainer.innerHTML = '';
    explanationContainer.innerHTML = '';
    explanationContainer.style.display = 'none';

    const letters = ['A','B','C','D','E','F'];
    const indices = optionOrder[currentQuestion] || shuffleArray(question.options.map((_, i) => i));
    optionOrder[currentQuestion] = indices;

    indices.forEach(function(optIndex, pos){
        const option = question.options[optIndex];
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.setAttribute('role','button');
        button.setAttribute('aria-label','Antwoord ' + letters[pos] + ': ' + option);
        button.dataset.optionIndex = optIndex;
        button.innerHTML = '<span class="answer-letter">' + letters[pos] + '</span><span>' + option + '</span>';
        button.addEventListener('click', function(){ selectAnswer(optIndex, button); });
        answersContainer.appendChild(button);
    });

    updateNavigationButtons();
    if (answers[currentQuestion] !== undefined) {
        showPreviousAnswer();
    }
}

function selectAnswer(optionIndex, button){
    const question = quizData.questions[currentQuestion];
    const isCorrect = optionIndex === question.correctAnswer;
    answers[currentQuestion] = { ...(answers[currentQuestion] || {}), selectedAnswer: optionIndex, isCorrect: isCorrect };
    if (isCorrect && !answers[currentQuestion].scored){
        score++;
        answers[currentQuestion].scored = true;
    }
    var allButtons = answersContainer.querySelectorAll('.answer-btn');
    allButtons.forEach(function(btn){
        btn.disabled = true;
        const btnIndex = Number(btn.dataset.optionIndex);
        if (btnIndex === question.correctAnswer) {
            btn.classList.add('correct');
        }
    });
    if (!isCorrect){
        button.classList.add('incorrect');
    }
    showExplanation(isCorrect, question);
    nextBtn.disabled = false;
}
function showExplanation(isCorrect, question){ explanationContainer.style.display = 'block'; var explanationTitle = isCorrect ? '✅ Correct!' : '❌ Helaas, dit is niet het juiste antwoord.'; var explanationText = isCorrect ? question.explanationCorrect : question.explanationIncorrect; explanationContainer.innerHTML = '<div class="explanation-title">' + explanationTitle + '</div><div class="explanation-text">' + explanationText + '</div>'; var announcement = document.createElement('div'); announcement.className = 'sr-only'; announcement.setAttribute('role','status'); announcement.setAttribute('aria-live','polite'); announcement.textContent = explanationTitle + ' ' + explanationText; document.body.appendChild(announcement); setTimeout(function(){ announcement.remove(); }, 1000); }
function showPreviousAnswer(){
    var answer = answers[currentQuestion];
    if (answer){
        var allButtons = answersContainer.querySelectorAll('.answer-btn');
        var question = quizData.questions[currentQuestion];
        allButtons.forEach(function(btn){
            btn.disabled = true;
            const btnIndex = Number(btn.dataset.optionIndex);
            if (btnIndex === question.correctAnswer) {
                btn.classList.add('correct');
            }
            if (!answer.isCorrect && btnIndex === answer.selectedAnswer) {
                btn.classList.add('incorrect');
            }
        });
        showExplanation(answer.isCorrect, question);
        nextBtn.disabled = false;
    }
}
function nextQuestion(){ if (currentQuestion < quizData.questions.length - 1){ currentQuestion++; displayQuestion(); } else { showResults(); } }
function previousQuestion(){ if (currentQuestion > 0){ currentQuestion--; displayQuestion(); } }
function updateNavigationButtons(){ prevBtn.disabled = currentQuestion === 0; if (answers[currentQuestion] !== undefined){ nextBtn.disabled = false; nextBtn.textContent = currentQuestion === quizData.questions.length - 1 ? 'Toon Resultaten' : 'Volgende Vraag →'; } else { nextBtn.disabled = true; nextBtn.textContent = 'Volgende Vraag →'; } }
function showResults(){ 
    stopTimer();
    quizContainer.style.display = 'none'; 
    resultsContainer.style.display = 'block'; 
    var totalAnswered = answers.filter(function(a){ return a !== undefined; }).length; 
    var correct = answers.filter(function(a){ return a && a.isCorrect; }).length; 
    var incorrect = totalAnswered - correct; 
    var percentage = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;
    document.getElementById('score-percentage').textContent = percentage + '%'; 
    document.getElementById('score-message').textContent = getScoreMessage(percentage); 
    document.getElementById('correct-count').textContent = correct; 
    document.getElementById('incorrect-count').textContent = incorrect; 
    document.getElementById('total-answered').textContent = totalAnswered;
    document.getElementById('total-time').textContent = formatTime(elapsedSeconds);
    
    // Calculate per-lecture scores
    var lectureScores = {};
    quizData.questions.forEach(function(question, index){
        if(question.lecture){
            if(!lectureScores[question.lecture]){
                lectureScores[question.lecture] = {correct: 0, total: 0};
            }
            lectureScores[question.lecture].total += 1;
            if(answers[index] && answers[index].isCorrect) lectureScores[question.lecture].correct += 1;
        }
    });
    
    var lectureScoresHtml = '';
    Object.keys(lectureScores).sort().forEach(function(lecture){
        var score_data = lectureScores[lecture];
        if(score_data.total > 0){
            var lecturePercentage = Math.round((score_data.correct / score_data.total) * 100);
            lectureScoresHtml += '<div class="lecture-score-item">' +
                '<div class="lecture-title">' + lecture + '</div>' +
                '<div class="lecture-bar-row">' +
                    '<div class="lecture-bar-container">' +
                        '<div class="lecture-bar-fill" style="width: ' + lecturePercentage + '%"></div>' +
                    '</div>' +
                    '<div class="lecture-score-meta">' + score_data.correct + '/' + score_data.total + ' · ' + lecturePercentage + '%</div>' +
                '</div>' +
            '</div>';
        }
    });
    document.getElementById('lecture-scores').innerHTML = lectureScoresHtml;
    
    var announcement = document.createElement('div'); 
    announcement.className = 'sr-only'; 
    announcement.setAttribute('role','status'); 
    announcement.setAttribute('aria-live','polite'); 
    announcement.textContent = 'Quiz voltooid! Je score is ' + percentage + '%. ' + correct + ' correct, ' + incorrect + ' incorrect van de ' + totalAnswered + ' beantwoorde vragen. Tijd: ' + formatTime(elapsedSeconds) + '.'; 
    document.body.appendChild(announcement); 
    setTimeout(function(){ announcement.remove(); }, 1000); 
}
function getScoreMessage(percentage){ if (percentage === 100) return 'Perfect! Je beheerst de stof uitstekend! 🎉'; if (percentage >= 80) return 'Geweldig! Je bent goed voorbereid! 🌟'; if (percentage >= 60) return 'Goed gedaan! Nog wat herhaling en je zit goed! 👍'; if (percentage >= 40) return 'Je bent op de goede weg, blijf oefenen! 📚'; return 'Blijf studeren, je kunt het! 💪'; }
function restartQuiz(){ 
    currentQuestion = 0; 
    score = 0; 
    answers = []; 
    Object.keys(optionOrder).forEach(k => delete optionOrder[k]);
    elapsedSeconds = 0;
    timerDisplay.textContent = '00:00';
    quizContainer.style.display = 'block'; 
    resultsContainer.style.display = 'none'; 
    startTimer();
    displayQuestion(); 
}
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', previousQuestion);
restartBtn.addEventListener('click', restartQuiz);
document.addEventListener('keydown', function(e){ if (quizContainer.style.display !== 'none'){ if (e.key === 'ArrowRight' && !nextBtn.disabled){ nextQuestion(); } else if (e.key === 'ArrowLeft' && !prevBtn.disabled){ previousQuestion(); } else if (e.key >= '1' && e.key <= '6'){ var index = parseInt(e.key) - 1; var buttons = answersContainer.querySelectorAll('.answer-btn'); if (buttons[index] && !buttons[index].disabled){ buttons[index].click(); } } } });
if (typeof module !== 'undefined' && module.exports){ module.exports = { initQuiz }; }
