// ===== Animated Counters =====
function animateCounter(id, target, duration) {
  const element = document.getElementById(id);
  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / target));
  const timer = setInterval(() => {
    start++;
    element.textContent = start;
    if (start >= target) clearInterval(timer);
  }, stepTime);
}

window.addEventListener("load", () => {
  animateCounter("courses", 12, 1500);
  animateCounter("badges", 8, 1500);
  animateCounter("hours", 42, 1500);

  // ===== Charts =====
  const ctx1 = document.getElementById("categoryChart");
  new Chart(ctx1, {
    type: "doughnut",
    data: {
      labels: ["AI", "Data Science", "Web Dev", "Cybersecurity"],
      datasets: [{
        data: [35, 25, 20, 20],
        backgroundColor: ["#5EAAB5", "#B2E0E6", "#8EDCE6", "#4B9AA6"],
        borderWidth: 1,
      }]
    },
    options: {
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });

  const ctx2 = document.getElementById("weeklyChart");
  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Hours Studied",
        data: [2, 3, 4, 1, 5, 2, 3],
        backgroundColor: "#5EAAB5",
        borderRadius: 8,
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});
