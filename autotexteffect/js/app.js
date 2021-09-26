//UI
const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
const pgh = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ipsum dolor sit amet, consectetur adipisicing elit, sed do ipsum dolor sit amet, consectetur adipisicing elit, sed do ";

// console.log(pgh.length);//string is character array in js so length ko use loh ya

let idx = 1;
let speed = 1000;//setTimeout or setInterval use mhar moh // aut mha setInterval htae  htae ll ya tl

function autotext(){
	// console.log('hay');

	textel.innerText = pgh.slice(0,idx);//string moh slice


	//idx += 1;
	idx++;

	if(idx > pgh.length){
		idx = 1;
	}

	setTimeout(autotext,speed);
	
}

autotext();


//Event Listener
speedel.addEventListener('input',()=>{

	// console.log('hay');
	// console.log(speedel.value);

	speed = 100 / speedel.value;
});


