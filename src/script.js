// 1. A Kérdések Adatbázisa
const questions = [
    {
        question: "Mi Magyarország fővárosa?",
        answers: [
            { text: "Debrecen", correct: false },
            { text: "Budapest", correct: true },
            { text: "Szeged", correct: false },
            { text: "Pécs", correct: false }
        ]
    },
    {
        question: "Hány megyéje van Magyarországnak?",
        answers: [
            { text: "23", correct: false },
            { text: "7", correct: false },
            { text: "19", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Melyik város NEM megyeszékhely?",
        answers: [
            { text: "Tatabánya", correct: false },
            { text: "Komárom", correct: true },
            { text: "Szekszárd", correct: false },
            { text: "Salgótarján", correct: false }
        ]
    },
    {
        question: "Hány országgal határos Magyarország?",
        answers: [
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Melyik Magyarország második legnagyobb városa?",
        answers: [
            { text: "Miskolc", correct: false },
            { text: "Debrecen", correct: true },
            { text: "Szeged", correct: false },
            { text: "Zalaegerszeg", correct: false }
        ]
    }
];

// 2. Játékállapot változók
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";

// ===============================================================
// 3. DOM inicializáló függvény – csak böngészőben fut
// ===============================================================
function initDOM() {
    const startScreen = document.getElementById("start-screen");
    const quizContent = document.getElementById("quiz-content");
    const playerNameInput = document.getElementById("player-name");
    const startButton = document.getElementById("start-button");

    const questionElement = document.getElementById("question-text");
    const answerButtonsElement = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-button");
    const scoreElement = document.getElementById("score");
    const feedbackElement = document.getElementById("feedback");

    // START gomb logika
    startButton.addEventListener("click", () => {
        playerName = playerNameInput.value.trim();
        if (playerName === "") {
            alert("Kérlek, írd be a neved az induláshoz!");
            return;
        }

        startScreen.style.display = "none";
        quizContent.style.display = "block";
        startQuiz();
    });

    // A kvíz indítása
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        scoreElement.textContent = score;
        nextButton.style.display = "none";
        feedbackElement.textContent = "";

        nextButton.removeEventListener("click", startQuiz);
        nextButton.addEventListener("click", handleNextButton);
        nextButton.textContent = "Következő Kérdés";

        showQuestion();
    }

    function showQuestion() {
        resetState();

        // ----------------------------------------------------------
        // Kérdéssorszámozás módosítása – Pusztai Krisztián
        // ----------------------------------------------------------
        const currentQuestion = questions[currentQuestionIndex];
        const questionNo = currentQuestionIndex + 1;
        questionElement.textContent = `${questionNo}. ${currentQuestion.question}`;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.textContent = answer.text;
            button.classList.add("btn");

            if (answer.correct) {
                button.dataset.correct = "true";
            }

            button.addEventListener("click", selectAnswer);
            answerButtonsElement.appendChild(button);
        });
    }

    function resetState() {
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
        nextButton.style.display = "none";
        feedbackElement.textContent = "";
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";

        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
            scoreElement.textContent = score;
            feedbackElement.textContent = "Helyes! ✅";
        } else {
            selectedBtn.classList.add("incorrect");
            feedbackElement.textContent = "Helytelen. ❌";
        }

        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });

        nextButton.style.display = "block";
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    function showScore() {
        resetState();
        questionElement.textContent =
            `${playerName}, a játék vége! Elért pontszám: ${score} / ${questions.length}`;

        feedbackElement.textContent = "Gratulálunk a részvételhez! 🎉";

        nextButton.textContent = "Újra Kezdés";
        nextButton.style.display = "block";

        nextButton.removeEventListener("click", handleNextButton);

        nextButton.addEventListener("click", () => {
            quizContent.style.display = "none";
            startScreen.style.display = "block";
            playerNameInput.value = "";
        });
    }
}

// ===============================================================
// 4. DOM inicializáció csak BÖNGÉSZŐBEN (teszt alatt nem fut!)
// ===============================================================

// Csak böngészőben fusson le, teszt alatt SOHA
if (typeof window !== "undefined" && typeof document !== "undefined" && !(typeof module !== "undefined" && module.exports)) {
    initDOM();
}

// ===============================================================
// 5. Export a Jest tesztekhez
// ===============================================================
if (typeof module !== "undefined" && module.exports) {
    module.exports = { questions };
}