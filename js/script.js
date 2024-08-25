inputTextEl = document.querySelector('.input-text');
criptButtonEl = document.querySelector('.cript');
decriptButtonEl = document.querySelector('.decript');
copyButtonEl = document.querySelector('.copy');
resultEl = document.querySelector('.result');

/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

const criptMessage = (msg) => {
  const word = msg.value;
  const arrWord = word
    .toLowerCase()
    .split('')
    .map((letter) => {
      return letter
        .replace('e', 'enter')
        .replace('i', 'imes')
        .replace('a', 'ai')
        .replace('o', 'ober')
        .replace('u', 'ufat');
    });
  const msgCript = arrWord.join('');
  return msgCript;
};

const descriptMessage = (msg) => {
  const word = msg.value;
  const arrWord = word
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word
        .replace('enter', 'e')
        .replace('ai', 'a')
        .replace('enter', 'i')
        .replace('ober', 'o')
        .replace('ufat', 'u');
    });
  const msgDecript = arrWord.join(' ');
  return msgDecript;
};

const renderMessageCript = () => {
  if (inputTextEl.value === '') {
    alert('Digite sua mensagem!');
  } else {
    resultEl.style.justifyContent = 'space-between';
    resultEl.innerHTML = `<p class='message'>${criptMessage(inputTextEl)}</p>
    <button class="btn copy">Copiar</button>
    `;
  }
};
const renderMessageDecript = () => {
  if (inputTextEl.value === '') {
    alert('Digite sua mensagem!');
  } else {
    resultEl.style.justifyContent = 'space-between';
    resultEl.innerHTML = `<p class='message'>${descriptMessage(inputTextEl)}</p>
    <button class="btn copy">Copiar</button>
    `;
  }
};

criptButtonEl.addEventListener('click', renderMessageCript);
decriptButtonEl.addEventListener('click', renderMessageDecript);
