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
let exitModal = document.getElementById('exitModal');
modalCount = 0;
document.addEventListener('mouseleave',function(e){
// console.log(e.clientY)
if(e.clientY < 0){
  modalCount++
  if(modalCount <=2){
exitModal.style.display = 'block'
document.body.style.overflow = "hidden";
  }
  if(modalCount <= 2){
    exitModal.style.display = 'block'
document.body.style.overflow = "hidden";
// console.log(modalCount)
  }
}

})

let closeModal = document.querySelector('.closeBtn');
closeModal.addEventListener('click',function(){
  exitModal.style.display = 'none'
document.body.style.overflow = "auto";

})

