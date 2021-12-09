const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  // printMinutes();
  // printSeconds();
  setInterval(() => {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
  // return chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];

}

function printSeconds() {
  // ... your code goes here
  // return chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const newLi = document.createElement("li");
  newLi.textContent = chronometer.split();
  splitsElement.appendChild(newLi);

}

function clearSplits() {
  // ... your code goes here
  splitsElement.textContent = "";
  chronometer.reset();
  // printTime();
}

function setStopBtn() {
  btnLeftElement.textContent = "STOP";
  btnLeftElement.classList.replace('start', 'stop');
  chronometer.start();
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.textContent = "SPLIT";
  btnRightElement.classList.replace('reset', 'split');
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.textContent = "START";
  btnLeftElement.classList.replace("stop", "start");
  chronometer.stop();
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.textContent = "RESET"
  btnRightElement.classList.replace('split', 'reset');
}

// // Start/Stop Button
// btnLeftElement.addEventListener('click', () => {
//   // ... your code goes here
//   btnLeftElement.classList.toggle("stop");
//   btnLeftElement.classList.toggle("start");
//   if (btnLeftElement.classList.contains("start")){
//     btnLeftElement.textContent="STOP";
//   } else {
//     btnLeftElement.textContent="START";
//   }
// });

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("start")) {
    setStopBtn();
    setSplitBtn();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
  }
});


// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("split")) {
    printSplit();
  } else {
    clearSplits();
  }
});





// // Reset/Split Button
// btnRightElement.addEventListener('click', () => {
//   // ... your code goes here
//   btnRightElement.classList.toggle("split");
//   btnRightElement.classList.toggle("reset");
//   if (btnRightElement.classList.contains("start")){
//   btnRightElement.textContent="SPLIT";
//   btnRightElement.classList.toggle("reset", "split")
// });
