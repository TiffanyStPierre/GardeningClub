const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');

function navToggle() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle);

document.getElementById('form-btn').addEventListener('click', function(event){
    event.preventDefault()
    alert('Thank you. Your membership is being processed.');
    firstName.value = '';
    lastName.value = '';
    email.value = '';
});