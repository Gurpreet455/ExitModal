modalCount = 0;
maxshow = 3
let exitModal = document.getElementById('exitModal');
modalCount = 0;
let closeModal = document.querySelector('.closeBtn');
closeModal.addEventListener('click',function(){
  exitModal.style.display = 'none'
document.body.style.overflow = "auto";
})

// desktop
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
// mobile
else{ 

  if(modalCount <= maxshow){
 window.addEventListener('popstate', function(event) {
        modalCount++
exitModal.style.display = 'block'
document.body.style.overflow = "hidden";
  alert('mbl3')
  
    });
 history.pushState({ page: 1 }, "title 1", "#");
    history.pushState(null, "", location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }
  else{
    window.history.back()
  }
  }



// window.history.back();
//          alert('mbl1')
//  window.addEventListener('popstate', function(event) {
//         modalCount++
// if(modalCount <=maxshow){
// exitModal.style.display = 'block'
// document.body.style.overflow = "hidden";
//   alert('mbl2')
//   }
  
//     });
//     history.pushState({ page: 1 }, "title 1", "#");
//     history.pushState(null, "", location.href);
//     window.onpopstate = function () {
//       history.go(1);
//     };