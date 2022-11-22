// Bismillah
const cword = document.querySelector('#cword');
const pword = document.querySelector('#pword');
const pspan = document.querySelector('#pword + span');

const matchPasswords = (e) => {
    cword.pattern = e.target.value;
    alertMismatch(e);
};
const alertMismatch = (e)=>{
    (document.querySelector('#cword:invalid')) ?
    pspan.textContent = '\* Passwords do not match' : pspan.textContent = '';
};

pword.addEventListener('input',matchPasswords);
cword.addEventListener('input',alertMismatch);
document.querySelectorAll('input[id*="name"]').forEach((element)=>{element.title = 'Enter a valid name!'});
cword.title = 'Passwords do not match';
