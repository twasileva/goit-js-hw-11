const refs = {
  startBtn: document.querySelector('button[data-start]'),
  inputDate: document.getElementById('date-selector'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]')
}
class Timer {
  constructor() {

  }

  start() {
    setInterval(() => {
      const currentTime = Date.now()
      // console.log(currentTime);
    }, 1000);

  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

}

const timer = new Timer()

refs.startBtn.addEventListener('click', timer.start.bind(timer))


const futureDate = refs.inputDate.addEventListener('blur', e => console.log(Date.parse(new Date(e.target.value))))

console.table(futureDate);


// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}
