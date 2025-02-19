// Get the countdown element
const countdownElement = document.getElementById('countdown');

// Generate a random time between 5 and 20 minutes (in seconds)
const randomMinutes = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // Random value between 5 and 20 minutes
const countdownTime = randomMinutes * 60 * 1000; // Convert to milliseconds

// Set the end time by adding the countdown time to the current time
const endTime = new Date().getTime() + countdownTime;

// Update the countdown every second
const timer = setInterval(() => {
  const now = new Date().getTime();
  const remainingTime = endTime - now;

  if (remainingTime <= 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "Time's up!";
  } else {
    const minutes = Math.floor(remainingTime / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    countdownElement.innerHTML = `${minutes}m ${seconds}s`;
  }
}, 1000);
