inputTextEl = document.querySelector('.input-text');
criptButtonEl = document.querySelector('.cript');
decriptButtonEl = document.querySelector('.decript');
resultEl = document.querySelector('.result');

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
        .replace(/enter/g, 'e')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    });
  const msgDecript = arrWord.join(' ');
  return msgDecript;
};

const copyText = () => {
  const p = document.querySelector('.message');
  p.select();
  p.setSelectionRange(0, 99999);
  document.execCommand('copy');
};

const renderMessageCript = () => {
  if (inputTextEl.value === '') {
    alert('Digite sua mensagem!');
  } else {
    resultEl.style.justifyContent = 'space-between';
    resultEl.innerHTML = `<textarea class='message'>${criptMessage(
      inputTextEl,
    )}</textarea>
    <button class="btn copy">Copiar</button>
    `;
    copyButtonEl = document.querySelector('.copy');
    copyButtonEl.addEventListener('click', copyText);
  }
};
const renderMessageDecript = () => {
  if (inputTextEl.value === '') {
    alert('Digite sua mensagem!');
  } else {
    resultEl.style.justifyContent = 'space-between';
    resultEl.innerHTML = `<textarea class='message'>${descriptMessage(
      inputTextEl,
    )}</textarea>
    <button class="btn copy">Copiar</button>
    `;
    copyButtonEl = document.querySelector('.copy');
    copyButtonEl.addEventListener('click', copyText);
  }
};

criptButtonEl.addEventListener('click', renderMessageCript);
decriptButtonEl.addEventListener('click', renderMessageDecript);
