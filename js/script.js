inputTextEl = document.querySelector('.input-text');
criptButtonEl = document.querySelector('.cript');
decriptButtonEl = document.querySelector('.decript');
copyButtonEl = document.querySelector('.copy');
resultEl = document.querySelector('.result');

console.log(copyButtonEl);

const criptografar = () => {
  resultEl.style.justifyContent = 'space-between';
  resultEl.innerHTML = `<p class='message'>${inputTextEl.value}</p>
  <button class="btn copy">Copiar</button>
  `;
};
const descriptografar = () => {};

criptButtonEl.addEventListener('click', criptografar);
