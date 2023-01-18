// NOTE: the javascript displays and update time and date (every 5 seconds)

let initialDt = new Date(); // intitial time, displayed when the page is first loaded
let dateTime = document.querySelector(".dateTime");

// formatting time: displays it as "DD.MM.YYYY - HH:mm"
// I chose not to install any dependency to keep the file lightweight, but you can install moment if you want to edit the time/date more easily
dateTime.innerHTML =
  ("0" + initialDt.getDate()).slice(-2) +
  "." +
  ("0" + (initialDt.getMonth() + 1)).slice(-2) +
  "." +
  initialDt.getFullYear() +
  "&nbsp; - &nbsp;" +
  ("0" + initialDt.getHours()).slice(-2) +
  ":" +
  ("0" + initialDt.getMinutes()).slice(-2);


// updates time every 5 seconds
setInterval(() => {
  let updatedDt = new Date();
  dateTime.innerHTML =
    ("0" + updatedDt.getDate()).slice(-2) +
    "." +
    ("0" + (updatedDt.getMonth() + 1)).slice(-2) +
    "." +
    updatedDt.getFullYear() +
    "&nbsp; - &nbsp;" +
    ("0" + updatedDt.getHours()).slice(-2) +
    ":" +
    ("0" + updatedDt.getMinutes()).slice(-2);
}, 5_000);
