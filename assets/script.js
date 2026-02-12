const questions = [
    {q: "Sur qui le jeûne du Ramadan est-il obligatoire ?", o: ["Tout musulman, pubère, sain d'esprit et capable", "Uniquement les hommes", "Toute personne habitant un pays musulman"], a: 0, ref: "Question 1"},
    {q: "Lequel de ces signes marque la puberté chez le garçon ?", o: ["L'âge de 10 ans", "L'apparition des poils pubiens ou les émissions nocturnes", "Le changement de voix uniquement"], a: 1, ref: "Question 2"},
    {q: "Comment confirme-t-on le début du mois de Ramadan ?", o: ["Par le calendrier civil", "Par l'observation du croissant lunaire", "Par le début de la chaleur"], a: 1, ref: "Question 3"},
    {q: "Peut-on jeûner par précaution un jour avant le Ramadan ?", o: ["Oui, c'est recommandé", "Non, c'est interdit (sauf habitude de jeûne)", "Seulement si le ciel est nuageux"], a: 1, ref: "Question 4"},
    {q: "Quel est le jugement de celui qui renie l'obligation du jeûne ?", o: ["Il commet un péché mineur", "Il devient mécréant car il renie un pilier", "Ce n'est pas grave"], a: 1, ref: "Question 5"},
    {q: "Quand l'intention (Niyyah) doit-elle être prise pour le jeûne obligatoire ?", o: ["Après le lever du soleil", "La nuit avant l'aube (Fajr)", "Au moment de rompre le jeûne"], a: 1, ref: "Question 6"},
    {q: "Faut-il prononcer l'intention à voix haute ?", o: ["Oui, obligatoirement", "Non, sa place est dans le cœur", "C'est préférable"], a: 1, ref: "Question 7"},
    {q: "Qu'est-ce que le Sahour ?", o: ["Le repas de rupture", "Le repas de fin de nuit avant l'aube", "La prière de nuit"], a: 1, ref: "Question 8"},
    {q: "Le Sahour est-il obligatoire ?", o: ["Oui", "Non, c'est une Sunnah recommandée", "Uniquement pour les voyageurs"], a: 1, ref: "Question 9"},
    {q: "Quelle est la recommandation pour le Sahour ?", o: ["Le prendre très tôt vers minuit", "Le retarder jusqu'à l'approche de l'aube", "Ne pas boire d'eau"], a: 1, ref: "Question 10"},
    {q: "Lequel de ces actes annule le jeûne ?", o: ["Manger par oubli", "Les rapports sexuels volontaires", "Utiliser du parfum"], a: 1, ref: "Question 11"},
    {q: "Si l'on mange par oubli, que doit-on faire ?", o: ["Rompre et rattraper", "Continuer son jeûne, il est valide", "Donner une aumône"], a: 1, ref: "Question 12"},
    {q: "L'injection nutritive (perfusion) annule-t-elle le jeûne ?", o: ["Oui", "Non", "Seulement si elle fait mal"], a: 0, ref: "Question 13"},
    {q: "L'injection de soin (non nutritive) annule-t-elle le jeûne ?", o: ["Oui", "Non", "Seulement le soir"], a: 1, ref: "Question 14"},
    {q: "Le vomissement provoqué volontairement nécessite-t-il un rattrapage ?", o: ["Oui", "Non", "Seulement pour les femmes"], a: 0, ref: "Question 15"},
    {q: "Le saignement des gencives avalé involontairement annule-t-il le jeûne ?", o: ["Oui", "Non", "Seulement si c'est beaucoup"], a: 1, ref: "Question 16"},
    {q: "Le prélèvement de sang pour analyse rompt-il le jeûne ?", o: ["Oui", "Non", "Seulement plus de 10ml"], a: 1, ref: "Question 17"},
    {q: "La Hijama (ventouses) rompt-elle le jeûne selon l'auteur ?", o: ["Oui", "Non", "Seulement si c'est le vendredi"], a: 0, ref: "Question 18"},
    {q: "L'usage d'un inhalateur (ventoline) pour l'asthme est-il permis ?", o: ["Non, c'est une rupture", "Oui, c'est autorisé", "Seulement en cas d'évanouissement"], a: 1, ref: "Question 19"},
    {q: "Avaler sa salive est-il permis pendant le jeûne ?", o: ["Oui", "Non", "Seulement le matin"], a: 0, ref: "Question 20"},
    {q: "Le voyageur a-t-il la permission de rompre son jeûne ?", o: ["Non, jamais", "Oui, c'est une dispense d'Allah", "Uniquement s'il voyage à pied"], a: 1, ref: "Question 21"},
    {q: "Si le voyageur ne ressent aucune fatigue, peut-il jeûner ?", o: ["Oui, c'est autorisé", "Non, c'est interdit", "Il doit demander l'avis d'un Imam"], a: 0, ref: "Question 22"},
    {q: "Que doit faire un malade chronique qui ne guérira pas ?", o: ["Rattraper plus tard", "Nourrir un pauvre par jour (Fidya)", "Rien du tout"], a: 1, ref: "Question 23"},
    {q: "Quelle est la Fidya (compensation) pour une personne âgée ?", o: ["Jeûner le double", "Nourrir un pauvre (environ 750g à 1kg de nourriture)", "Prier 2 rakats"], a: 1, ref: "Question 24"},
    {q: "Une femme ayant ses menstrues peut-elle jeûner ?", o: ["Oui", "Non, c'est interdit et invalide", "Seulement si elle veut"], a: 1, ref: "Question 25"},
    {q: "Une femme doit-elle rattraper les prières manquées pendant ses règles ?", o: ["Oui", "Non, seulement le jeûne", "Seulement si elle a le temps"], a: 1, ref: "Question 26"},
    {q: "La femme enceinte ou allaitante peut-elle rompre le jeûne ?", o: ["Oui, si elle craint pour sa santé ou l'enfant", "Non, jamais", "Seulement les weekends"], a: 0, ref: "Question 27"},
    {q: "Si quelqu'un meurt avec des jours de Ramadan à rattraper :", o: ["On donne de l'argent", "Ses proches peuvent jeûner pour lui", "Le jeûne est annulé"], a: 1, ref: "Question 28"},
    {q: "Le rattrapage des jours peut-il se faire tout au long de l'année ?", o: ["Oui, jusqu'au Ramadan suivant", "Non, uniquement en Shawwal", "Seulement en hiver"], a: 0, ref: "Question 29"},
    {q: "Faut-il rattraper les jours obligatoirement de façon successive ?", o: ["Oui", "Non, on peut les séparer", "Seulement pour les hommes"], a: 1, ref: "Question 30"},
    {q: "Quel est le moment recommandé pour rompre le jeûne (Iftar) ?", o: ["Dès que le soleil se couche", "20 minutes après le coucher", "Quand les étoiles apparaissent"], a: 0, ref: "Question 31"},
    {q: "Avec quoi est-il préférable de rompre le jeûne ?", o: ["De la viande", "Des dattes ou de l'eau", "Du jus de fruit"], a: 1, ref: "Question 32"},
    {q: "L'usage du Siwak est-il permis au jeûneur ?", o: ["Non, c'est déconseillé", "Oui, à tout moment de la journée", "Seulement avant midi"], a: 1, ref: "Question 33"},
    {q: "Se parfumer pendant le Ramadan est-il permis ?", o: ["Oui", "Non", "Seulement pour les femmes"], a: 0, ref: "Question 34"},
    {q: "Peut-on utiliser du dentifrice ?", o: ["Oui, en faisant attention de ne pas avaler", "Non, c'est interdit", "Seulement après le Maghreb"], a: 0, ref: "Question 35"},
    {q: "La baignade ou la douche pour se rafraîchir est-elle permise ?", o: ["Oui", "Non", "Seulement si on est malade"], a: 0, ref: "Question 36"},
    {q: "Goûter la nourriture sans l'avaler est-il autorisé ?", o: ["Oui, si nécessaire (cuisine)", "Non, jamais", "Seulement le sel"], a: 0, ref: "Question 37"},
    {q: "Comment appelle-t-on la prière de nuit en Ramadan ?", o: ["Al-Icha", "Le Tarawih", "Le Sobh"], a: 1, ref: "Question 38"},
    {q: "Combien de Rakats le Prophète faisait-il au Tarawih ?", o: ["20 rakats", "11 ou 13 rakats", "40 rakats"], a: 1, ref: "Question 39"},
    {q: "Qu'est-ce que l'I'tikaf ?", o: ["La retraite spirituelle à la mosquée", "Le pèlerinage", "L'aumône"], a: 0, ref: "Question 40"},
    {q: "Où chercher Laylatul Qadr (la Nuit du Destin) ?", o: ["La première nuit", "Les nuits impaires des 10 derniers jours", "Le 15 du mois"], a: 1, ref: "Question 41"},
    {q: "Quel est le volume de Zakat Al-Fitr ?", o: ["1kg de riz", "Un Saa' (environ 2.5 à 3kg)", "10 euros"], a: 1, ref: "Question 42"},
    {q: "Quand doit-on donner Zakat Al-Fitr ?", o: ["Au début du Ramadan", "Avant la prière de l'Aïd", "Un mois après l'Aïd"], a: 1, ref: "Question 43"},
    {q: "Quel est le mérite des 6 jours de Shawwal ?", o: ["Comme si on avait jeûné toute l'année", "Pardon de 10 ans de péchés", "Entrée directe au Paradis"], a: 0, ref: "Question 44"},
    {q: "Peut-on faire Shawwal avant de rattraper Ramadan ?", o: ["Oui", "Non, l'obligation passe avant", "C'est préférable"], a: 1, ref: "Question 45"},
    {q: "Quels jours est-il interdit de jeûner ?", o: ["Le lundi", "Les jours de l'Aïd", "Le jour d'Arafat"], a: 1, ref: "Question 46"},
    {q: "Quel est le mérite du jeûne d'Arafat ?", o: ["Expie 1 an passé et 1 an futur", "Expie toute la vie", "Aucun mérite"], a: 0, ref: "Question 47"},
    {q: "Peut-on jeûner uniquement le vendredi seul ?", o: ["Oui", "Non, sauf si on jeûne la veille ou le lendemain", "Seulement en été"], a: 1, ref: "Question 48"},
    {q: "Quel est le mérite de 'Achoura ?", o: ["Expie l'année précédente", "Expie l'année future", "Expie 70 ans"], a: 0, ref: "Question 49"},
    {q: "Une femme peut-elle jeûner le surérogatoire sans l'accord du mari ?", o: ["Oui", "Non (si le mari est présent)", "Uniquement le lundi"], a: 1, ref: "Question 50"}
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let selectedAnswer = null;

function initializeQuiz() {
    createProgressBar();
    displayQuestion();
}

function createProgressBar() {
    const progressBar = document.getElementById('progressBar');
    progressBar.innerHTML = '';
    for (let i = 0; i < questions.length; i++) {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        segment.id = `progress-${i}`;
        progressBar.appendChild(segment);
    }
    updateProgressBar();
}

function updateProgressBar() {
    for (let i = 0; i < questions.length; i++) {
        const segment = document.getElementById(`progress-${i}`);
        segment.classList.remove('completed', 'current');
        if (i < currentQuestionIndex) {
            segment.classList.add('completed');
        } else if (i === currentQuestionIndex) {
            segment.classList.add('current');
        }
    }
}

function displayQuestion() {
    const container = document.getElementById('quizContainer');
    const question = questions[currentQuestionIndex];
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
    document.getElementById('correctCount').textContent = correctAnswers;
    document.getElementById('incorrectCount').textContent = incorrectAnswers;

    const letters = ['A', 'B', 'C', 'D'];
    
    container.innerHTML = `
        <div class="question-card">
            <div class="question-number">${currentQuestionIndex + 1}.</div>
            <div class="question-text">${question.q}</div>
            <div class="options-list">
                ${question.o.map((option, index) => `
                    <div class="option-item" onclick="selectOption(${index})">
                        <div class="option-letter">${letters[index]}.</div>
                        <div class="option-text">${option}</div>
                        <div class="check-icon">✓</div>
                    </div>
                `).join('')}
            </div>
            <div class="feedback-box" id="feedbackBox">
                <div class="feedback-title">✓ Bonne réponse !</div>
                <div class="feedback-text">La ${question.ref} confirme que cela est permis, à condition de recracher ce qu'on a goûté.</div>
            </div>
            <div class="navigation">
                ${currentQuestionIndex > 0 ? 
                    '<button class="nav-btn secondary" onclick="previousQuestion()">Retour</button>' : 
                    '<div></div>'}
                <button class="nav-btn primary" id="nextBtn" onclick="nextQuestion()" disabled>
                    ${currentQuestionIndex === questions.length - 1 ? 'Terminer' : 'Suivant'}
                </button>
            </div>
        </div>
    `;

    selectedAnswer = null;
    updateProgressBar();
}

function selectOption(index) {
    if (selectedAnswer !== null) return;

    selectedAnswer = index;
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-item');
    const correctIndex = question.a;

    options.forEach((option, i) => {
        if (i === index) {
            option.classList.add('selected');
        }
    });

    setTimeout(() => {
        if (index === correctIndex) {
            options[index].classList.add('correct');
            correctAnswers++;
            document.getElementById('feedbackBox').classList.add('show');
        } else {
            options[index].classList.add('incorrect');
            options[correctIndex].classList.add('correct');
            incorrectAnswers++;
        }

        document.getElementById('correctCount').textContent = correctAnswers;
        document.getElementById('incorrectCount').textContent = incorrectAnswers;
        document.getElementById('nextBtn').disabled = false;
    }, 300);
}

function nextQuestion() {
    if (selectedAnswer === null) return;

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        if (selectedAnswer !== null) {
            const question = questions[currentQuestionIndex];
            if (selectedAnswer === question.a) {
                correctAnswers--;
            } else {
                incorrectAnswers--;
            }
        }
        displayQuestion();
    }
}

function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.querySelector('.progress-container').style.display = 'none';
    
    const resultsScreen = document.getElementById('resultsScreen');
    resultsScreen.classList.add('show');

    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    document.getElementById('finalScore').textContent = `${correctAnswers}/${questions.length}`;
    document.getElementById('statCorrect').textContent = correctAnswers;
    document.getElementById('statIncorrect').textContent = incorrectAnswers;
    document.getElementById('statPercentage').textContent = `${percentage}%`;

    if (percentage >= 90) {
        document.getElementById('resultsIcon').textContent = '🌟';
    } else if (percentage >= 70) {
        document.getElementById('resultsIcon').textContent = '🎉';
    } else if (percentage >= 50) {
        document.getElementById('resultsIcon').textContent = '👍';
    } else {
        document.getElementById('resultsIcon').textContent = '📚';
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    selectedAnswer = null;
    
    document.getElementById('quizContainer').style.display = 'block';
    document.querySelector('.progress-container').style.display = 'block';
    document.getElementById('resultsScreen').classList.remove('show');
    
    initializeQuiz();
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Initialize quiz on page load
window.addEventListener('DOMContentLoaded', initializeQuiz);