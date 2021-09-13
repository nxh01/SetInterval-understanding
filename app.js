var dateint = setInterval(datetime, 1000);
function datetime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var ms = d.getMilliseconds();

  console.log(h, m, s, ms);
  document.getElementById("h").innerHTML = h;
  document.getElementById("s").innerHTML = s;
  document.getElementById("m").innerHTML = m;
  document.getElementById("ms").innerHTML = ms;
}
function resume() {
  var dateint = setInterval(datetime, 1000);
}
function stopit() {
  clearInterval(dateint);
}
function hide() {
  if (document.getElementById("ms").style.color == "white") {
    document.getElementById("ms").style.color = "black";
    document.getElementById("p1").style.color = "black";
  } else {
    document.getElementById("ms").style.color = "white";
    document.getElementById("p1").style.color = "white";
  }
}
// Timer
var timer = setInterval(timer, 10000);
function timer() {
  let timesecond = 30;
  const timeH = document.querySelector("h2");
  displayTime(timesecond);
  const countDown = setInterval(() => {
    timesecond--;
    displayTime(timesecond);
    if (timesecond == 0 || timesecond < 1) {
      endCount();
      clearInterval(countDown);
    }
  }, 1000);
  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML = ` ${min < 10 ? "0" : ""} ${min}:${
      sec < 10 ? "0 " : ""
    }${sec}`;
  }

  function endCount() {
    timeH.innerHTML = "TImeOut";
  }
}
