const donation = document.getElementById("donation");
const close = document.getElementById("close-btn");
const formEl = document.getElementById("donation-form");
const btns = document.getElementById("btns");
const declineBtn = document.getElementById("decline-btn");
const donTxt = document.getElementById("don-text")
const innerFormEl = document.getElementById('inner-form')
const telegramBtn = document.getElementById('fa-telegram')

close.disabled = true;

close.addEventListener('click', ()=>{
  donation.style.display = "none"
})

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
  }
  else{
  formEl.style.display = "none";
  donTxt.innerHTML = "Please wait ..."
  setTimeout(()=>{
    donTxt.innerHTML = `haha you got hacked 
    <p class = "u-name">${name}</p>, thank you for the donation of <p class= "u-name">$5000</p>.`
    close.disabled = false
  }, 3000)}
});

//I want to do toogle clss on hover over the declineBtn

declineBtn.addEventListener("mouseover", () => {
  btns.classList.toggle("reverse");
});

innerFormEl.addEventListener('submit', (e)=>{
  e.preventDefault()
  const data = new FormData(innerFormEl)
  const fname = data.get('fname')

  if(fname.trim() === ""){
    alert("Please enter your name.")
    return;
  }
  else{
    innerFormEl.innerHTML = "Please wait...";
    setTimeout(()=>{
      innerFormEl.innerHTML = `Thank you,
      <p class = "u-name">${fname}</p> for the comment`
}, 3000)}})

telegramBtn.addEventListener('click', ()=>{
  window.open('https://t.me/kal_ab_s', '_blank')
})