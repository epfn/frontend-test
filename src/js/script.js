//menu toggle
const menuList = document.querySelector(".drawer");
const menuToggle = document.querySelector(".hamburger");
const body = document.querySelector("body");

menuList.setAttribute("data-visible", false);
menuToggle.setAttribute("aria-expanded", false);

menuToggle.addEventListener("click", () => {
  const visibility = menuList.getAttribute("data-visible");

  if (visibility === "false") {
    body.style.overflowY = "hidden";
    menuList.setAttribute("data-visible", true);
    menuToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    body.style.overflowY = "unset";
    menuList.setAttribute("data-visible", false);
    menuToggle.setAttribute("aria-expanded", false);
  }
});

let myChart = document.getElementById("myChart").getContext("2d");

const xValues = [2015, 2016, 2017, 2018, 2019, 2020];
const yValues = [37, 44, 49, 51, 54, 56];

let popChart = new Chart(myChart, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0.25,
        backgroundColor: "#dddddd",
        borderColor: "#e01e2e",
        data: yValues,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
    },
    responsive: true,
    ticks: {
      //.. Other settings
      stepSize: 5 /* total/4 shows 0, 25%, 50%, 75%, 100% */,
      callback: function (value, index, values) {
        return (value / 800) * 100 + "%";
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
});
