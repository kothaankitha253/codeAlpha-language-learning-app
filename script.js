let flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used to style web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript adds interactivity to websites."
    }
];

let currentCard = 0;

function displayCard() {
    document.getElementById("question").textContent =
        flashcards[currentCard].question;

    document.getElementById("answer").textContent =
        flashcards[currentCard].answer;

    document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
    document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    displayCard();
}

function prevCard() {
    currentCard =
        (currentCard - 1 + flashcards.length) % flashcards.length;
    displayCard();
}

function addCard() {
    let question = document.getElementById("newQuestion").value;
    let answer = document.getElementById("newAnswer").value;

    if (question && answer) {
        flashcards.push({
            question: question,
            answer: answer
        });

        document.getElementById("newQuestion").value = "";
        document.getElementById("newAnswer").value = "";

        alert("Flashcard Added!");
    }
}

function editCard() {
    let question = document.getElementById("newQuestion").value;
    let answer = document.getElementById("newAnswer").value;

    if (question && answer) {
        flashcards[currentCard] = {
            question: question,
            answer: answer
        };

        displayCard();
        alert("Flashcard Updated!");
    }
}

function deleteCard() {
    if (flashcards.length > 1) {
        flashcards.splice(currentCard, 1);

        if (currentCard >= flashcards.length) {
            currentCard = flashcards.length - 1;
        }

        displayCard();
        alert("Flashcard Deleted!");
    } else {
        alert("At least one flashcard must remain.");
    }
}

displayCard();