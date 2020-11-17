// declaring variables
const btn = document.querySelector('.submit');
const input = document.querySelector('.input');
const errorMsg = document.querySelector('.error');
const lastMsg = document.querySelector('.lastMessage');

// Event Listener
btn.addEventListener('click', (e) => {
	e.preventDefault();
	lastMsg.innerHTML = input.value;
	input.value = '';
});