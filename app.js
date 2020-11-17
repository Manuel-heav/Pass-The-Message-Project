// declaring variables
const btn = document.querySelector('.submit');
const input = document.querySelector('.input');
const errorMsg = document.querySelector('.error');
const lastMsg = document.querySelector('.lastMessage');

// Event Listener
btn.addEventListener('click', (e) => {
	e.preventDefault();
	if(input.value === ''){
		errorMsg.classList.toggle('hide');
		setTimeout(function(){errorMsg.classList.toggle('hide')}, 2000);
	}else{
		lastMsg.innerHTML = input.value;
		input.value = '';
	}
});

function EnterKey(){
	input.addEventListener("keyup", (e) =>{
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
})};

