import Swal from 'sweetalert2'
import Tick from '@pqina/flip';


const refs = {
  startBtn: document.querySelector('button[data-start]'),
  inputDate: document.getElementById('date-selector'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]')
}


refs.startBtn.addEventListener('click', onStartTimer)
refs.inputDate.addEventListener('change', onValidationDate)
let timerId = null


function onValidationDate() {
  const currentTime = Date.now()

  const diff = Date.parse(new Date(refs.inputDate.value)) - currentTime;

  if (diff > 0) {
    refs.startBtn.removeAttribute('disabled')
  } else {
    refs.startBtn.setAttribute('disabled', 'true')
    Swal.fire('Please choose a date in the future')
    clearInterval(timerId)
    refs.dataDays.textContent = '00'
    refs.dataHours.textContent = '00'
    refs.dataMinutes.textContent = '00'
    refs.dataSeconds.textContent = '00'
  }
}


function onStartTimer() {

  timerId = setInterval(() => {
    const currentTime = Date.now()

    const diff = Date.parse(new Date(refs.inputDate.value)) - currentTime;

    if (diff > 0) {

      let { days, hours, minutes, seconds } = convertMs(diff)

      let secondsTimer = seconds
      let minutesTimer = minutes
      let hoursTimer = hours
      let daysTimer = days
      refs.dataDays.textContent = `${daysTimer}`
      refs.dataHours.textContent = `${hoursTimer}`
      refs.dataMinutes.textContent = `${minutesTimer}`
      refs.dataSeconds.textContent = `${secondsTimer}`

    }
  }, 1000);

}

function pad(value) {
  return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

