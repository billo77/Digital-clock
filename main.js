function digitalClock() {
  var dt = new Date();
  var hour = dt.getHours();
  var minute = dt.getMinutes();
  var second = dt.getSeconds();

  minute = Tik(minute);
  second = Tik(second);

  document.getElementById('dt').innerHTML = hour + ":" + minute;
  document.querySelector("#dt_second").innerHTML = second;

  if (hour > 12) {
    document.getElementById('dt_hour').innerHTML = " ";
  }
  else {
    document.querySelector("#dt_hour").innerHTML = " ";
  }

  var time;
  time = setInterval('digitalClock()', 1000);
}

function Tik(tikValue) {
  if (tikValue < 10) {
    tikValue = "0" + tikValue;
  }
  return tikValue;
}