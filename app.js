const quizForm = document.getElementById("quiz-form");
const questions = document.querySelectorAll(".question");
const submitButton = document.querySelectorAll(".submit-btn");
const results = document.getElementById("results");
const score = document.getElementById("score");

let currentQuestion = 0;
let scoreCount = 0;

function showQuestion() {
	questions[currentQuestion].classList.add("active");
}

function hideQuestion() {
	questions[currentQuestion].classList.remove("active");
}

function showResults() {
	results.style.display = "block";
	score.textContent = scoreCount;
}

function checkAnswer() {
	const answer = quizForm.elements["answer"];
	if (answer.value === "A") {
		scoreCount++;
	}
}

submitButton.forEach(button => {
	button.addEventListener("click", function(e) {
		e.preventDefault();
		checkAnswer();
		hideQuestion();
		currentQuestion++;
		if (currentQuestion < questions.length) {
			showQuestion();
		} else {
			showResults();
		}
	});
});

showQuestion();
