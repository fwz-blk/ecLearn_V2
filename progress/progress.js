// Counter animation
const animateCounter = (id, target, duration) => {
  const element = document.getElementById(id);
  let start = 0;
  const increment = target / (duration / 16);
  const counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(counter);
    }
    element.textContent = Math.floor(start);
  }, 16);
};

// Start counters
animateCounter('coursesCompleted', 12, 1000);
animateCounter('hoursStudied', 87, 1200);
animateCounter('badgesEarned', 5, 800);

// Progress bar animation
const progressBars = document.querySelectorAll('.progress-bar span');
window.addEventListener('load', () => {
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-progress');
    bar.style.width = `${value}%`;
  });
});

// Charts
const barCtx = document.getElementById('barChart');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Hours Studied',
      data: [2, 3, 4, 3, 5, 2, 4],
      backgroundColor: '#5EAAB5'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
      x: { grid: { display: false } }
    }
  }
});

const doughnutCtx = document.getElementById('doughnutChart');
new Chart(doughnutCtx, {
  type: 'doughnut',
  data: {
    labels: ['HTML & CSS', 'JS', 'Python', 'AI'],
    datasets: [{
      data: [90, 75, 60, 45],
      backgroundColor: ['#5EAAB5', '#B2E0E6', '#A1D3D9', '#7FC9D3']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    },
    cutout: '70%'
  }
});
