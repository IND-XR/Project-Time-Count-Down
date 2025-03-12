document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("datetime");
  const count = document.getElementById("countdown");
  const pause = document.getElementById("save");
  const timesave = document.getElementById("timesave");

  const Restart = document.getElementById("Restart");

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

    return `${day}d :  ${hour}h : ${minutes}m  : ${second}s `;
  }

  function updateCounterdown() {
    const timeremaining = calculateTimeRemaining();
    count.textContent = timeremaining;
    //count.innerText = timeremaining;
    console.log(timeremaining);
  }

  function startCountdown() {
    updateCounterdown(); // update immediately
    setInterval(updateCounterdown, 1000);
  }
  input.addEventListener("change", startCountdown);

  pause.addEventListener('click', function () {

    if(!count || count.innerHTML.trim()  !== ""){
      const timing = count.innerHTML;


      const savedTime = document.createElement("div");
      savedTime.innerText = timing

      
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.placeholder = "enter";

      savedTime.appendChild(inputField); // Append input field to savedTime div
      timesave.appendChild(savedTime);   // Append savedTime to timesave container


     }else{    
      selecttimer.innerHTML="<p>  <b> Alert </b> <br> First Choose your timer </p> " ;
      console.log("Select Time");
        setTimeout(() => {
          selecttimer.innerHTML = "";
          console.log("Alert removed");
      }, 3000);
      }

    });
  });




// **********************************************


// let intervalID = setInterval(() => {
      //   selecttimer.remove()
      //   console.log('Hi welcome to Itsourcecode!');
      //   }, 1000);
        
        // setTimeout(() => {
        // clearInterval(intervalID);
        // console.log("this is worng")
        // }, 1000);

    // // imesave.appendChild += (  `<input type="text" placeholder="enter">  `)t
    // timesave.appendChild,'SavedTimer',(savedTime).innerHTML +=` <input type="text" placeholder="enter">`;







  // *******************************************
  // function checkcondition() {
  // }

  //   checkcondition();

  // let repeatCheck = setInterval(() => {
  //   checkcondition();
  // }, 1000); // Runs every 2 seconds

  // // Stop the loop after a certain time (optional)
  // setTimeout(() => {
  //   clearInterval(repeatCheck);
  //   console.log("Stopped checking condition.");
  // }, 1000); // Stops after 10 seconds


      // function (){
      //   console.log("stopping ")
      //   clearInterval=intervalID
      // }
      // let intervalID = setInterval(function() {selecttimer.remove()}, 2000);


      


      // function start(){
      //   intervalID = setInterval(selecttimer.remove(), 2000)
      // }

      // function stop(){
      //   clearInterval(intervalID)
      // }

      // document.getElementById("selecttimer").addEventListener("click", start);
    // document.getElementById("selecttimer").addEventListener("click", stop);


      // intervalID = setInterval(function() {selecttimer.remove()}, 2000);

      // clearInterval(intervalID);

  

    // if (!count || count.innerHTML.trim() ) {
    //   const timing = count.innerHTML;
    //   const savedTime = document.createElement("div");
    //   savedTime.innerText = timing;

    //   const inputField = document.createElement("input");
    //   inputField.type = "text";
    //   inputField.placeholder = "enter";

    //   savedTime.appendChild(inputField); // Append input field to savedTime div
    //   timesave.appendChild(savedTime);   // Append savedTime to timesave container
    // }else{
    //   selecttimer.innerHTML="Select First timer";
    //   // console.log("Select timer");
    // }
