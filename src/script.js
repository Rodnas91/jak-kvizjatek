/**
 * Kvízjáték fő logikája.
 * A fájl támogatja a böngészős futást és a Jest egységteszteket is.
 */

/**
 * Tesztkörnyezet detektálása (Node + Jest esetén true).
 * @type {boolean}
 */
const isTest = typeof module !== "undefined" && module.exports;

/**
 * Egy lehetséges válasz a kérdésre.
 * @typedef {Object} Answer
 * @property {string} text   - A válasz szövege.
 * @property {boolean} correct - Igaz, ha ez a válasz a helyes.
 */

/**
 * Egy kvízkérdés modellje.
 * @typedef {Object} Question
 * @property {string} question - A kérdés szövege.
 * @property {Answer[]} answers - A lehetséges válaszok listája.
 */

/**
 * A kvízkérdések "adatbázisa".
 * @type {Question[]}
 */
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
        question: "Hány vármegyéje van Magyarországnak?",
        answers: [
            { text: "23", correct: false },
            { text: "7", correct: false },
            { text: "19", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Melyik város NEM vármegyeszékhely?",
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

/** @type {number} Az aktuális kérdés indexe a questions tömbben. */
let currentQuestionIndex = 0;

/** @type {number} A játékos aktuális pontszáma. */
let score = 0;

/** @type {string} A játékos neve. */
let playerName = "";

// --- 2. DOM VÁLTOZÓK CSAK BÖNGÉSZŐBEN ---
/** @type {HTMLElement|null} */
let startScreen;
/** @type {HTMLElement|null} */
let quizContent;
/** @type {HTMLInputElement|null} */
let playerNameInput;
/** @type {HTMLButtonElement|null} */
let startButton;
/** @type {HTMLElement|null} */
let questionElement;
/** @type {HTMLElement|null} */
let answerButtonsElement;
/** @type {HTMLButtonElement|null} */
let nextButton;
/** @type {HTMLElement|null} */
let scoreElement;
/** @type {HTMLElement|null} */
let feedbackElement;

// --- 3. DOM ELEMENT LEKÉRÉS CSAK HA NEM TESZT ---
if (!isTest) {
    startScreen = document.getElementById("start-screen");
    quizContent = document.getElementById("quiz-content");
    playerNameInput = document.getElementById("player-name");
    startButton = document.getElementById("start-button");

    questionElement = document.getElementById("question-text");
    answerButtonsElement = document.getElementById("answer-buttons");
    nextButton = document.getElementById("next-button");
    scoreElement = document.getElementById("score");
    feedbackElement = document.getElementById("feedback");

    // Név bekérés + játék indítása
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
}

// --- 4. JÁTÉK LOGIKA (TESZTBIZTOS, NEM DOM-FÜGGŐ) ---

/**
 * A kvíz újraindítása: indexek nullázása, pontszám nullázása,
 * gombok állapotának visszaállítása, első kérdés megjelenítése.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = String(score);
    nextButton.style.display = "none";
    feedbackElement.textContent = "";

    nextButton.removeEventListener("click", startQuiz);
    nextButton.addEventListener("click", handleNextButton);
    nextButton.textContent = "Következő Kérdés";

    showQuestion();
}

/**
 * Az aktuális kérdés és válaszlehetőségek kirajzolása a DOM-ra.
 * Pusztai Krisztián fejlesztése: külön "Kérdés X / Y" számláló a kérdés fölött.
 */
function showQuestion() {
    resetState();

    const questionNumberElement = document.getElementById("question-number");
    if (questionNumberElement) {
        questionNumberElement.textContent =
            `Kérdés ${currentQuestionIndex + 1} / ${questions.length}`;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
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

/**
 * Előkészíti a felületet egy új kérdés megjelenítéséhez:
 * törli a régi válaszgombokat és elrejti a "Következő" gombot.
 */
function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    nextButton.style.display = "none";
    feedbackElement.textContent = "";
}

/**
 * Egy válasz választásának kezelése.
 * Növeli a pontszámot, ha helyes a válasz, és kiemeli a helyes megoldást.
 * @param {MouseEvent} e - A kattintás eseményobjektuma.
 */
function selectAnswer(e) {
    const selectedBtn = /** @type {HTMLButtonElement} */ (e.target);
    const correct = selectedBtn.dataset.correct === "true";

    if (correct) {
        selectedBtn.classList.add("correct");
        score++;
        scoreElement.textContent = String(score);
        feedbackElement.textContent = "Helyes! ✅";
    } else {
        selectedBtn.classList.add("incorrect");
        feedbackElement.textContent = "Helytelen. ❌";
    }

    Array.from(answerButtonsElement.children).forEach((button) => {
        const btn = /** @type {HTMLButtonElement} */ (button);
        if (btn.dataset.correct === "true") {
            btn.classList.add("correct");
        }
        btn.disabled = true;
    });

    nextButton.style.display = "block";
}

/**
 * A "Következő kérdés" gomb eseménykezelője.
 * Ha van még kérdés, a következő jelenik meg, különben az eredmény.
 */
function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

/**
 * A játék végeredményének megjelenítése:
 * - személyre szóló üzenet a játékos nevével,
 * - pontszám kiírása,
 * - "Újra kezdés" gomb beállítása.
 */
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

// --- 5. EXPORT TESZTEKHEZ ---

if (isTest) {
    /** @type {{questions: Question[]}} */
    module.exports = { questions };
}