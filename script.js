import { data } from "./data.js";

window.onload = () => {
  // Variables
  const curHours = document.querySelectorAll(".hours-current");
  const prevHours = document.querySelectorAll(".hours-previous");
  const titles = document.querySelectorAll(".title");
  const daily = document.querySelector("#daily");
  const weekly = document.querySelector("#weekly");
  const monthly = document.querySelector("#monthly");

  data.forEach((item) => {
    console.log(item);
  });

  (function () {
    titles.forEach((title, index) => {
      title.innerText = data[index].title;
    });
  })();

  // Functions
  function setTimeFrame(timeframe) {
    curHours.forEach((hours, index) => {
      hours.innerText = data[index].timeframes[timeframe].current;
    });
    prevHours.forEach((hours, index) => {
      hours.innerText = `Last Week - ${data[index].timeframes[timeframe].previous}hrs`;
    });
  }

  setTimeFrame("monthly");

  // Event listeners

  daily.addEventListener("click", () => {
    setTimeFrame("daily");
  });

  weekly.addEventListener("click", () => {
    setTimeFrame("weekly");
  });

  monthly.addEventListener("click", () => {
    setTimeFrame("monthly");
  });
};
