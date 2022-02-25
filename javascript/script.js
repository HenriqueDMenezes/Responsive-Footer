const btn = document.querySelector(".btn");
const resultado = document.querySelector(".resultado"); 


btn.addEventListener('click',palidromo)


function palidromo(){
  const palavra = document.querySelector('.input-text').value;
  let len = palavra.length;

  let comeco = palavra.substring(0,Math.floor(len/2)).toLowerCase();
  alert(comeco)
}  