// 1. A Kérdések Adatbázisa (MARAD VÁLTOZATLAN)
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

// 2. Változók beállítása (a játék állapotának követésére)
let currentQuestionIndex = 0;
let score = 0;
let playerName = ""; // ÚJ VÁLTOZÓ a játékos nevének tárolására

// 3. A HTML elemek lekérése az azonosítóik alapján (DOM)
const startScreen = document.getElementById("start-screen"); // ÚJ
const quizContent = document.getElementById("quiz-content"); // ÚJ
const playerNameInput = document.getElementById("player-name"); // ÚJ
const startButton = document.getElementById("start-button"); // ÚJ

const questionElement = document.getElementById("question-text");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");

// 4. ÚJ FUNKCIÓ: A kvíz elindítása a név bekérése után
startButton.addEventListener("click", () => {
    // 1. Elmentjük a játékos nevét
    playerName = playerNameInput.value.trim(); 
    
    // Ha a név üres, figyelmeztetjük a játékost
    if (playerName === "") {
        alert("Kérlek, írd be a neved az induláshoz!");
        return;
    }

    // 2. Elrejtjük a kezdőképernyőt
    startScreen.style.display = "none";
    
    // 3. Megjelenítjük a kvíz tartalmát
    quizContent.style.display = "block";
    
    // 4. Elindítjuk a kvízt
    startQuiz();
});

// A többi függvény megváltozott, lásd alább.

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score; // Frissítjük a pontszámot
    nextButton.style.display = "none";
    feedbackElement.textContent = "";
    // A startButton klikk eseményt is eltávolítjuk, hogy az Újra Kezdés gomb működjön
    nextButton.removeEventListener("click", startQuiz); 
    nextButton.addEventListener("click", handleNextButton);
    nextButton.textContent = "Következő Kérdés"; // Visszaállítjuk a Következő gomb szövegét
    
    showQuestion();
}

// ... showQuestion, resetState, selectAnswer, handleNextButton - ezek a függvények változatlanok maradhatnak ...

// Eredmény kijelzése a játék végén (MÓDOSÍTOTT)
function showScore() {
    resetState();
    
    // SZEMÉLYES ÜZENET: A játékos nevének felhasználása
    questionElement.textContent = `${playerName}, a játék vége! Elért pontszám: ${score} / ${questions.length}`;
    
    feedbackElement.textContent = "Gratulálunk a részvételhez! 🎉";
    
    // Kezdés újra gomb
    nextButton.textContent = "Újra Kezdés";
    nextButton.style.display = "block";
    
    // Eltávolítjuk a handleNextButton eseményfigyelőt
    nextButton.removeEventListener("click", handleNextButton);
    
    // Hozzáadjuk a névbekéréshez visszavezető eseményt.
    nextButton.addEventListener("click", () => {
        // Vissza a névbekérő képernyőre
        quizContent.style.display = "none";
        startScreen.style.display = "block";
        
        // Üresre állítjuk a mezőt, hogy legközelebb is beírhassa a nevét
        playerNameInput.value = ""; 
    });
}

// 5. A Játék elindítása a betöltés után
// Megjegyzés: A startQuiz függvényt már nem közvetlenül itt hívjuk meg,
// hanem a 'start-button' eseményfigyelőjében.
// showQuestion, resetState, selectAnswer, handleNextButton függvényeket másold át az előző válaszból.

// KEZELŐ FÜGGVÉNYEK (a legelső válaszból, változatlanok)
// Csak másold ide a showQuestion, resetState, selectAnswer, handleNextButton függvényeket az előző válaszomból:

function showQuestion() {
    // Töröljük a régi válasz gombokat és a visszajelzést
    resetState();

    // Krisztián fejlesztése: Kérdés X / Y számláló hozzáadása
    const questionNumberElement = document.getElementById("question-number");
    questionNumberElement.textContent = `Kérdés ${currentQuestionIndex + 1} / ${questions.length}`;

    let currentQuestion = questions[currentQuestionIndex];
    // Krisztián: Az eredeti számozást kivesszük, mert már van külön "Kérdés X / Y" számláló
    questionElement.textContent = currentQuestion.question;

    // Létrehozzuk a válasz gombokat
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        
        // Ha a válasz helyes, hozzáadjuk az infót a gombhoz
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        // Eseményfigyelő hozzáadása kattintásra
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    // Amíg van gomb (első gyermek), töröljük
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    // Elrejtjük a "Következő" gombot
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

    // Gátolja meg a további válaszadást (letiltja az összes gombot)
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); // Kiemeljük a helyes választ
        }
        button.disabled = true;
    });

    // Mutatjuk a "Következő" gombot
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