const sentences = [
	"Hello, this is Chaitanya Kini, currently pursuing Bachelor of Engineering at Canara Engineering College."
];

const msg = document.getElementById('msg');
const typedWords = document.getElementById('mywords');
const btn = document.getElementById('btn');

let startTime, endTime;

const playGame = () => {
	let randomNumber = Math.floor(Math.random() * sentences.length);
	msg.innerText = sentences[randomNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Done";
}

const endGame = () => {
	let date = new Date();
	endTime = date.getTime();
	let totalTime = 0,
		wordCount = 0;
	totalTime = Math.round((endTime - startTime) / 1000) // milliseconds -> 10.23 means  10 seconds 23 milliseconds
	console.log(totalTime);

	let totalStr = typedWords.value;
	wordCount = wordCounter(totalStr);

	let finalMsg = `You Typed Total ${wordCount} words in ${totalTime} seconds. `;
	msg.innerText = finalMsg;
}



const wordCounter = (str) => {
	let response = str.split(" ").length;
	console.log(response);
	return response;
}

btn.addEventListener('click', function() {
	console.log(this); // current btn 
	if (this.innerText == 'Start') {
		typedWords.disabled = false;
		playGame();
	} else if (this.innerText == "Done") {
		typedWords.disabled = true;
		btn.innerText = "Start";
		endGame();
	}
})

