const clocks = document.getElementById('clock');
// const clock = document.querySlector('#clock');

setInterval(function () {
  let date = new Date();
  // console.log(date)
  clocks.innerHTML = date.toLocaleTimeString();
},1000);