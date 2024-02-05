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
 window.addEventListener('popstate', function(event) {
      // This function will be called when the back button is pressed
      alert('Back button pressed!');
    });

    // To push a state onto the history stack (so that the popstate event will be triggered)
    history.pushState({ page: 1 }, "title 1", "#");

    // To prevent the user from navigating away by pressing the back button
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };

}