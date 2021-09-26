// UI
const counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach((counter)=>{

	// console.log(counter);
	counter.innerText = "0";//init
	// console.log(counter.getAttribute('data-target'));

	const updatecounter = ()=>{

		// const target = +counter.getAttribute('data-target');
		const target = Number(counter.getAttribute('data-target'));

		// console.log(typeof target);

		const ctr = +counter.innerText;
		// console.log(typeof ctr);

						//12000,5000,7500
		const increment = target/100;
		console.log(increment);

		if(ctr < target){
			counter.innerText = `${Math.ceil(ctr + increment)}`;
			setTimeout(updatecounter,50);//50ms kayr yin d fun ko invoke//setInterval nae ll write loh ya
		}
	};




	updatecounter();


});