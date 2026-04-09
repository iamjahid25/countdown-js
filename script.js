let targetDate = null;
    let interval = null;

    function setDate() {
      const input = document.getElementById("dateInput").value;

      if (!input) {
        alert("Please select a date!");
        return;
      }

      targetDate = new Date(input).getTime();

      if (interval) clearInterval(interval);

      interval = setInterval(updateCountdown, 1000);
      updateCountdown();
    }

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>It's Your Birthday</h2>";
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }