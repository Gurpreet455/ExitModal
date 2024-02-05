// let exitModal = document.getElementById('exitModal');
// document.addEventListener('mouseleave',function(e){
// exitModal.style.display = 'block'
// document.body.style.overflow = "hidden";
// })

// let closeModal = document.querySelector('.closeBtn');
// closeModal.addEventListener('click',function(){
//   exitModal.style.display = 'none'
// document.body.style.overflow = "auto";

// })
modalCount = 0;
maxshow = 3
let exitModal = document.getElementById('exitModal');
modalCount = 0;
let closeModal = document.querySelector('.closeBtn');
closeModal.addEventListener('click',function(){
  exitModal.style.display = 'none'
document.body.style.overflow = "auto";
})


if(window.innerWidth > 768){
console.log("desktop")
document.addEventListener('mouseleave',function(e){
if(e.clientY < 0){
  modalCount++
if(modalCount <=maxshow){
exitModal.style.display = 'block'
document.body.style.overflow = "hidden";
  }}
})
}

else
{ 

  alert('mbl1')
window.onhashchange = function() {
    alert("0")
 //blah blah blah
}
function goBack() {
    window.location.hash = window.location.lasthash[window.location.lasthash.length-1];
    alert("01")
    window.location.lasthash.pop();
}

}