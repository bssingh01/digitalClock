let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let amPm = document.querySelector("#amPm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  if (h > 12) {
    amPm.innerText = "PM";
  } else {
    amPm.innerText = "AM";
  }
  // Logic for setting time in 12 hours format
  h = h > 12 ? h - 12 : h;

  // Logic for adding one zero in starting if h, m, s value is less than 10.
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //Setting output in respective UI elements
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
}
console.log("hello");
setInterval(updateClock, 1000);
