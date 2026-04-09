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

