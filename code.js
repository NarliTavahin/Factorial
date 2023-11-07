
let button = document.getElementById('check');
let resultDiv = document.getElementById('result');
button.addEventListener('click', factorial);

function factorial() {

    let number = document.getElementById("num").value;

	if (number < 0) 
	{
		resultDiv.innerHTML = 'Error! Factorial for negative number does not exist.';
	}
	else if (number === 0) {
		resultDiv.innerHTML = `The factorial of ${number} is 1.`;
	}else if (number === '') 
	{
		resultDiv.innerHTML = `Please Enter the number!!!!!`;
	}
	
	else 
	{
		let fact = 1;
		for (let i = 1; i <= number; i++) 
		{
			fact *= i;
	    }
		resultDiv.innerHTML = `The factorial of ${number} is ${fact}.`;
	}
}