document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("datetime");
  const count = document.getElementById("countdown");
  const pause = document.getElementById("stop");

  function calculateTimeRemaining() {
    const tragetDate = new Date(input.value);
    const now = new Date();
    const distance = tragetDate - now;

    if (distance <= 0) {
      return "counterdown expired";
    }

    const day = Math.floor(distance / (1000 * 60 * 60 * 24)); // ( * value used null /   / is used value is 0 )  )

    const hour = Math.floor((distance / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((distance / 1000 / 60) % 60);

    const second = Math.floor((distance / 1000) % 60);

    return `${day}d ${hour}h ${minutes}m ${second}s `;
  }

  function updateCounterdown() {
    const timeremaining = calculateTimeRemaining();
    count.textContent = timeremaining;
    //count.innerText = timeremaining;
    console.log(timeremaining);
  }

  function startCountdown() {
    updateCounterdown(); // there use in one second code is runing
    setInterval(updateCounterdown, 1000);
  }

  input.addEventListener("change", startCountdown);


});

// function startCountdown() {
//     updateCounterdown();  // there use in one second code is runing
//     setInterval(updateCounterdown, 1000);
//   }

//   input.addEventListener('change', startCountdown);
