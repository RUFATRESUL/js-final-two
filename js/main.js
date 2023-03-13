let button=document.querySelector("button")
button.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => window.scrollY > 500 ?  button.style.transform.translateX("0px") : button.style.transform.translateX("-20px")

var number1=document.querySelector('.one-one')
var number2=document.querySelector('.one-two')
var number3=document.querySelector('.one-three')
var number4=document.querySelector('.one-four')

number1.value=0
number2.value=0
number3.value=0
number4.value=0
setInterval(() => {
  if(number1.value<360) {
  number1.value++
  number1.innerHTML=number1.value+'+'
}
}, 0);

setInterval(() => {
    if(number2.value<650) {
    number2.value++
    number2.innerHTML=number2.value+'+'
}
  }, 0);

  setInterval(() => {
    if(number3.value<1200){
    number3.value++
    number3.innerHTML=number3.value+'+'
  }
  }, 0);

  setInterval(() => {
    if(number4.value<100) {
    number4.value++
    number4.innerHTML=number4.value+'%'
  }
  }, 0);


 // $('.power-box').slick();
 



