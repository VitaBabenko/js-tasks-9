import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');

// let timerId = null;

// // button.setAttribute('disabled', 'disabled');

// input.addEventListener('click', onInput);
// button.addEventListener('click', onClickStartBtn);


// function onInput(evt) {
    
// }

// function onClickStartBtn(evt) {
//     const startTime = Date.now();

//     setInterval(() => {
//         const deltaTime = options - startTime;
//         const { days, hours, minutes, seconds } = convertMs(deltaTime);
//         console.log(`${days}:${hours}:${minutes}:${seconds}`);
//     }, 1000);
// }

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = addLeadingZero(Math.floor(ms / day));
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }