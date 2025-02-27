document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("datetime");
  const count = document.getElementById("countdown");
  const pause = document.getElementById("save");
  const timesave = document.getElementById("timesave");

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
    const day = Math.floor(distance / (1000 * 60 * 60 * 24)); // ( * value used null /   / is used value is 0 )  )

    const hour = Math.floor((distance / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((distance / 1000 / 60) % 60);

    const second = Math.floor((distance / 1000) % 60);

    return `${day}d ${hour}h ${minutes}m ${second}s `;
  }
  }

  function updateCounterdown() {
    const timeremaining = calculateTimeRemaining();
    count.textContent = timeremaining;
    //count.innerText = timeremaining;
    console.log(timeremaining);
  }


  function startCountdown() {
    updateCounterdown();  // update immediately
    setInterval(updateCounterdown, 1000);
  }
  input.addEventListener('change',startCountdown);


  pause.addEventListener('click',function(){
    const timing = count.innerHTML;

    const savedTime = document.createElement("div");
    savedTime.innerText = timing

    const text = document.createElement("textarea");
    document.innerText = timing

    timesave.appendChild(savedTime,text);
  });
});



// pause.addEventListener('click',function(){
//   const timing = count.innerHTML;


//   const savedTimeE = document.createElement("div");
//   savedTimeE.textContent = timing;

//   timesave.appendChild(savedTimeE);

//   console.log("save timing",timing);



//   document.getElementById("navigateBtn").addEventListener("click",function(){
//     console.log("run");


// input.addEventListener("change", startCountdown);

// pause.addEventListener("click",function(){
//   clearInterval(countdownInterval);
//   countdownInterval=startCountdown;
//   console.log("countdown pasued");

// })

  // function startCountdown() {
  //   updateCounterdown(); // update immediately

  //   if(countdownInterval){
  //     clearInterval(countdownInterval);
  //   }
  //   countdownInterval=setInterval(updateCounterdown, 1000);
  // }


// function startCountdown() {
//     updateCounterdown();  // there use in one second code is runing
//     setInterval(updateCounterdown, 1000);
//   }

//   input.addEventListener('change', startCountdown);






//  *******************stop  




// function startCountdown() {
//   updateCounterdown();  // // update immediately
//   countdownInterval=setInterval(updateCounterdown, 1000);
// }

// input.addEventListener("change",function(){
//   if(countdownInterval !== null){      // if it id propet same then it will be false
//     clearInterval(countdownInterval);
//     console.log(countdownInterval)
// }
// startCountdown();
// pause.textContent="pause";

// });

// pause.addEventListener("click",function(){
// if(countdownInterval !== null){
//   clearInterval(countdownInterval);
//   countdownInterval = null;
//   pause.textContent="start";
//   console.log("countdown paused")
// }else{
//   startCountdown();
//   pause.textContent="pause";
//   console.log("counterdown")
// }
// });
