const quizdatas = [
			{
				question:"What does CSS stand for ?",
				a:"Central Style Sheet",
				b:"Cascading Style Sheet",
				c:"Cascading Simple Sheet",
				d:"Century System Software",
				e:"Control Style Sheet",
				correct:"b"
			},
			{
				question:"What does HTML stand for ?",
				a:"Hypertext Market Sheet",
				b:"Hyper Technology Sheet",
				c:"Hyperloop Simple Sheet",
				d:"Hyper System Software",
				e:"Hyper Style Sheet",
				correct:"a"
			},
			{
				question:"What year was Javascript Launched ?",
				a:"1996",
				b:"1995",
				c:"1992",
				d:"1990",
				e:"1991",
				correct:"b"
			},
			{
				question:"What language run in browser ?",
				a:"Java",
				b:"C",
				c:"Python",
				d:"Javascript",
				e:"Php",
				correct:"d"
			}
	

	];


	// UI

	const quiz = document.getElementById('quiz');
	const questionel = document.getElementById('question');
	const answerels = document.querySelectorAll('.answer');
	// console.log(answerels);

	const a_text = document.getElementById('a_text'),
		b_text = document.getElementById('b_text'),
		c_text = document.getElementById('c_text'),
		d_text = document.getElementById('d_text'),
		e_text = document.getElementById('e_text');


	const submitbtn = document.getElementById('submit');


	let currentquiz = 0;
	let score = 0;

	// console.log(quizdatas[currentquiz]);


	loadquiz();

	function loadquiz(){
		deselectanswer();
		
		const currentquizdata = quizdatas[currentquiz];

		questionel.textContent = currentquizdata.question;
		a_text.textContent = currentquizdata.a;
		b_text.textContent = currentquizdata.b;
		c_text.textContent = currentquizdata.c;
		d_text.textContent = currentquizdata.d;
		e_text.textContent = currentquizdata.e;
	}


	function getselected(){
		let answer;

		answerels.forEach(answerel=>{
			if(answerel.checked){
				answer = answerel.id;
			}
		});

		return answer;
	}

// uncheck
function deselectanswer(){
	answerels.forEach(answerel=>answerel.checked=false);

}


submitbtn.addEventListener('click',()=>{

	const answer = getselected();

	// if(answer){
	// 	if(answer === quizdatas[currentquiz].correct){
	// 		score++;
	// 	}
	// }

	// console.log(answer);

	if(answer){

		if(answer === quizdatas[currentquiz].correct){
	 		score++;
		}

		// currentquiz += 1;
		currentquiz++;

		console.log(score);



		if(currentquiz < quizdatas.length){
			loadquiz();
		}else{
			quiz.innerHTML = `
			<h2>You answered correctly at ${score} / ${quizdatas.length} questions</h2>
			<button class="btn" onclick="location.reload()">Reload</button>
			`;

		}
	}
})