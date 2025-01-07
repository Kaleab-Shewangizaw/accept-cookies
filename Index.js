const donation = document.getElementById("donation");
const close = document.getElementById("close-btn");
const formEl = document.getElementById("donation-form");
const btns = document.getElementById("btns");
const declineBtn = document.getElementById("decline-btn");
const donTxt = document.getElementById("don-text");
const innerFormEl = document.getElementById("inner-form");
const telegramBtn = document.getElementById("fa-telegram");
const startLngBtn = document.getElementById("start-learning");
const getStartedBtn = document.getElementById("get-started-btn");
const closeBtn = document.getElementById("close-btnn");

startLngBtn.addEventListener("click", () => {
  window.open("https://t.me/noobiecoders", "_blank");
});

getStartedBtn.addEventListener("click", () => {
  donation.style.display = "flex";
  donTxt.innerHTML = `<h2>please wait...</h2>`;
  setTimeout(() => {
    donTxt.innerHTML = `<h2>Welcome</h2>
    <h3>We are working on it.</h3>
    <h3>You can start learning on telegram.</h3>`
  }, 3000);
  
});

close.disabled = true;

close.addEventListener("click", () => {
  donation.style.display = "none";
});

setTimeout(() => {
  donation.style.display = "flex";
}, 2000);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const name = formData.get("d-name");

  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  } else {
    formEl.style.display = "none";
    donTxt.innerHTML = "Please wait ...";
    setTimeout(() => {
      donTxt.innerHTML = `😈hahaha😈 <br/> you got hacked 
    <p class = "u-name">${name}</p>, thank you for the donation of <p class= "u-name">$5000</p>.`;
      close.disabled = false;
    }, 3000);
  }
});

//I want to do toogle clss on hover over the declineBtn
let hoverCount = 0
declineBtn.addEventListener("mouseover", () => {
  hoverCount++
  btns.classList.toggle("reverse");
  if (hoverCount == 5){
    donTxt.innerHTML += `<h3 class = "warning" id = "warning">You got only one option 😈😈</h3>`
  }
  else if (hoverCount == 10){
    document.getElementById("warning").style.color = "yellow"
    document.getElementById("warning").innerHTML = "I am kidding, Please don't goooo... 🥺"
  }
  if(hoverCount >= 10){
    btns.classList.remove('reverse')
  }
  console.log(hoverCount)
});


innerFormEl.addEventListener('submit', (e)=>{
  e.preventDefault()
  const data = new FormData(innerFormEl)
  const fname = data.get('fname')
  const femail = data.get('femail')

  if (fname.trim() === "") {
    alert("Please enter your name.");
    return;
  }
  else if(femail.trim() === ""){
    alert ("Please enter your email.")
  }
  else{
    innerFormEl.innerHTML = "Please wait...";
    setTimeout(() => {
      innerFormEl.innerHTML = `Thank you,
      <p class = "u-name">${fname}</p> for the comment`;
    }, 3000);
  }
});

telegramBtn.addEventListener("click", () => {
  window.open("https://t.me/kal_ab_s", "_blank");
});

