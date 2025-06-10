function sayHello() {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");
  const compliment = document.getElementById("compliment");

  if (name === "") {
    greeting.innerText = "Please enter your name!";
    greeting.style.color = "red";
    compliment.innerText = "";
  } else {
    const emoji = "😊";
    greeting.innerText = `Hello, ${name}! ${emoji}`;
    greeting.style.color = "#28a745";

    // Compliment feature
    const compliments = [
      "You're awesome!",
      "You're a fast learner!",
      "You have a great mind!",
      "You bring good energy!",
      "Keep shining bright!"
    ];
    const random = Math.floor(Math.random() * compliments.length);
    compliment.innerText = compliments[random];
  }
}

function resetGreeting() {
  document.getElementById("nameInput").value = "";
  document.getElementById("greeting").innerText = "";
  document.getElementById("compliment").innerText = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Real-time clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").innerText = "Current Time: " + timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Call once initially
