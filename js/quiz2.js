var questions = [
	{
		question:"When Fry discovers that he's a billionaire, what is the most extravagant thing he buys?",
		choices:["A Lucy Liu robot", "A lifetime supply of Slurm", "The last tin of anchovies on Earth", "The Planet Express"],
		correctIndex:"2",
		answer: "He bought the last tin of anchovies on Earth, for 50 million dollars."
	},

	{
		question:"Finish this phrase: 'Morbo is pleased, but ____'",
		choices:["Angry", "Sticky", "Smelly", "Confused"],
		correctIndex:"1",
		answer:"Morbo is pleased, but STICKY!"
	},

	{
		question:"What is the only creature on Earth that Bender is sympathetic to?",
		choices:["Turtles", "Goats", "Cats", "Butterflies"],
		correctIndex:"0",
		answer:"Bender loves turtles, as they both have difficulty getting off their backs."
	},

	{
		question:"What is missing from Zapp Brannigan's uniform?",
		choices:["Boots", "Gloves", "Pants", "Belt"],
		correctIndex:"2",
		answer:"Pants, much to everyone's dismay."
	},

	{
		question:"How is Professor Farnsworth related to Fry?",
		choices:["Great (x30) grandson", "Great (x30) nephew", "2nd cousin 20 times removed", "He isn't"],
		correctIndex:"1",
		answer:"Farnsworth is Fry's great (x30) nephew."
	},

	{
		question:"Who is Bender's evil twin?",
		choices:["Calculon", "Roberto", "Flexo", "Coilette"],
		correctIndex:"2",
		answer:"Flexo. The only physical difference between the two is a small triangular metal goatee on Flexo's chin."
	},

	{
		question:"What is Zoidberg's first name?",
		choices:["John", "Phillip", "Kevin", "James"],
		correctIndex:"0",
		answer:"John. His full name is Doctor John A. Zoidberg."
	},

	{
		question:"How does the Femputer sentence Fry, Zapp, and Kif to die on the planet Amazonia?",
		choices:["By firing squad", "By snu snu", "By dinosaur attack", "By suicide booth"],
		correctIndex:"1",
		answer:"By snu snu. The spirit is willing, but the flesh is spongy and bruised."
	},

	{
		question:"What sport does Hermes compete in during the 2980 Olympics?",
		choices:["Octopus Wrestling", "Blernsball", "Swurling", "Limbo"],
		correctIndex:"3",
		answer:"Limbo. Unfortunately, he loses to Barbados Slim."
	},	

	{
		question:"What is Zoidberg a doctor of?",
		choices:["Art History", "General Medicine", "Podiatry", "Physics"],
		correctIndex:"0",
		answer:"Zoidberg's official doctorate is in Art History, though he acts as staff medical doctor for the Planet Express."
	}
]

var quiz = {
	questions:[],
	i:0,
	score:0,
	count:1,

	//show current question
	currentQuestion: function() {
		$("#question").text(questions[quiz.i].question);
		$("#answer").text(questions[quiz.i].answer);
		$("#answerA").text(questions[quiz.i].choices[0]);
		$("#answerB").text(questions[quiz.i].choices[1]);
		$("#answerC").text(questions[quiz.i].choices[2]);
		$("#answerD").text(questions[quiz.i].choices[3]);
		$("#count").text(quiz.count);
	},

	//check if answer is correct, adjust score
	checkAnswer: function() {
		var userAnswer = $('input[name="option"]:checked').val();
		var correctAnswer = questions[quiz.i].correctIndex;
		if (userAnswer===correctAnswer) {
			quiz.score++;
			$("#score").text(quiz.score);
			$("#result").text("Correct!").css("color", "#139510");
		}
		else {
			$("#result").text("Wrong").css("color", "#e13222");
		}
	},

	//go to the next question or show final score
	nextQuestion: function() {
		quiz.i++;
		if (quiz.i < 10) {
			quiz.count++;
			quiz.currentQuestion();
			$("input:checked").removeAttr("checked");
		}	
		else {
			$("#playArea").hide();
			$("#final").text(quiz.score);
			$("#finalScore").show();
		}
	},

	newGame:function() {
		quiz.i=0;
		quiz.score=0;
		quiz.count=1;
	}
}


$(document).ready(function(){

	//Initial launch, start game
	$("#start").click(function(){
		$("#intro").hide();
		$("#playArea").show();
		quiz.currentQuestion();
	});

	//Submit answer, get feedback
	$("#submit").click(function(){
		event.preventDefault();
		$("#quiz").hide();
		$("#feedback").show();
		quiz.checkAnswer();
	});

	//Show next question
	$("#next").click(function(){
		$("#feedback").hide();
		$("#quiz").show();
		quiz.nextQuestion();
	});

	//Start new game
	$("#new").click(function(){
		$("#finalScore").hide();
		$("#playArea").show()
		quiz.newGame();
		quiz.currentQuestion();
	});

});


