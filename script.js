let fanRunning = true;

function toggleFan() {
  const fanBlades = document.querySelector('.fan-blades');
  
  if (fanRunning) {
    fanBlades.style.animationPlayState = 'paused';
    fanRunning = false;
  } else {
    fanBlades.style.animationPlayState = 'running';
    fanRunning = true;
  }
}