document.getElementById('themeBtn').addEventListener('click',()=>{
 document.body.classList.toggle('dark');
});
document.querySelector('form').addEventListener('submit',e=>{
 e.preventDefault();
 alert('Thank you! Your message has been submitted.');
});
