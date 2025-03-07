

// **************************************************************
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

// --------------------------------------------------
// if (_.isEmpty(count) == 0 ) {
//   pause.addEventListener('click',function(){
//     const timing = count.innerHTML;
//     const savedTime = document.createElement("div");
//     savedTime.innerText = timing

//   // imesave.appendChild += (`<input type="text" placeholder="enter">`)
//   timesave.appendChild(savedTime).innerHTML+=`<input type="text" placeholder="enter">`;
//   });

// } else {
//   console.log("Select Time");
// }

// if (!count || count.innerHTML.trim() === "") {
//   console.log("Counter is empty");
// } else {
//   if (pause && timesave) {
//     pause.addEventListener("click", function () {
//       const timing = count.innerHTML;

//       const savedTime = document.createElement("div");
//       savedTime.innerText = timing;

//       const inputField = document.createElement("input");
//       inputField.type = "text";
//       inputField.placeholder = "Enter";

//       savedTime.appendChild(inputField);
//       timesave.appendChild(savedTime);
//     });
//   } else {
//     console.log("Pause or timesave element is missing");
//   }
// }
// }

// if (pause && timesave && count) {
//   pause.addEventListener("click", function () {
//     const timing = count.innerHTML;
    
//     const savedTime = document.createElement("div");
//     savedTime.innerText = timing;

//     const inputField = document.createElement("input");
//     inputField.type = "text";
//     inputField.placeholder = "Enter";

//     savedTime.appendChild(inputField);
//     timesave.appendChild(savedTime);
//   });
// } else {
//   console.log("Anmol");
// }


// function count(){
//   if ( count == count) {
//     pause.addEventListener('click',function(){
//         const timing = count.innerHTML;
//         const savedTime = document.createElement("div");
//         savedTime.innerText = timing
//         // imesave.appendChild += (`<input type="text" placeholder="enter">`)
//         timesave.appendChild(savedTime).innerHTML+=`<input type="text" placeholder="enter">`;
//       });
//   } else {
//     console.log("Anmol");
//   }
// }

  
   



// -----------------------------

//************************************************************************

pause.addEventListener('click',function(){

  if(!count || count.innerHTML.trim()  != ""){
    const timing = count.innerHTML;
    const savedTime = document.createElement("div");
    savedTime.innerText = timing
  // imesave.appendChild += (  `<input type="text" placeholder="enter">  `)t
  timesave.appendChild(savedTime).innerHTML +=`<input type="text" placeholder="enter">`;
  }else{ 
    selecttimer.innerHTML="Select First timer";
      // console.log(" Select Time ")
  }
  //timesave.appendChild(savedTime).innerHTML +=`<input type="text" placeholder="enter">`;


//   // const timing = count.innerHTML;
//   // const savedTime = document.createElement("div");
//   // savedTime.innerText = timing
//   // // imesave.appendChild += (  `<input type="text" placeholder="enter">  `)t
//   // timesave.appendChild(savedTime).innerHTML +=`<input type="text" placeholder="enter">`;
// });

//*********************************************************************************

  // pause.addEventListener('click',function(){
  //   const timing = count.innerHTML;
  //   const savedTime = document.createElement("div");
  //   savedTime.innerText = timing
  //   // imesave.appendChild += (  `<input type="text" placeholder="enter">  `)t
  //   timesave.appendChild(savedTime).innerHTML +=`<input type="text" placeholder="enter">`;
  // });
  
});
});

// function stop(){
//   if(count == number){
//     console.log("hello");
//   }
//  }


// function addfun(){
//   console.log("Select Time Fist");
//   const texts = document.getElementById("selecttimer");
//   texts.innerHTML += `<h1> selecttimer  </h1> `  ;
// }










// ***************************************************************
  

//
// 
  // save.addEventListener('click',function(){
  //   console.log("hello")
  //   const texttimesaved = document.getElementById("textstore");
  //   timesave.appendChild(savedTime,texttimesaved);

  // })


    // save.addEventListener('text',function(){
    //   textstore.innerText += "<input type='textarea' name='myText' />"
    //   console.log("hello")

    // });







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
