const watch = document.querySelector(".watch")
function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = new Date().getMinutes();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  
  watch.innerHTML = hour + " : " + min;
}
setInterval(showTime, 1000);
