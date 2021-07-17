refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]')
}
let timerId = null


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


refs.startBtn.addEventListener('click', onChangeColorBody)
refs.stopBtn.addEventListener('click', onCancelColorBody)

function onChangeColorBody() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor()
  }, 1000);
  refs.startBtn.setAttribute('disabled', 'true')
}

function onCancelColorBody() {
  clearInterval(timerId);
  document.body.style.backgroundColor = ''
  refs.startBtn.removeAttribute('disabled')
}