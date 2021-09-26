//UI
const codes = document.querySelectorAll('.code');
// console.log(codes);
// console.log(codes[0]);
codes[0].focus();

codes.forEach((code,index)=>{
	// console.log(code);
	code.addEventListener('keydown',(e)=>{
		// codees[index + 1].focus();

		if(e.key >=0 && e.key <=9){
			// codees[index + 1].focus();

		// For only 1 number
		//thu bar yite yite ae value ye value ka null p; pyit mr
			codes[index].value='';

			if(index !== 5){
				// codes[index+1].focus();
				setTimeout(()=>codes[index+1].focus(),10);
					
			}
		}else if(e.key === "Backspace"){
			if(index !== 0){
				setTimeout(()=>codes[index-1].focus(),10);
			}
		}
	})

});