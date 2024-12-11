document.querySelectorAll('.footerUL li').forEach(item => {
  item.addEventListener('click', () => {
    const link = item.querySelector('a');

    if (link) {
      window.location.href = link.href;
      window.open = link.href;
    }
  })
});




// document.addEventListener("DOMContentLoaded", () => {
//   const slidesContainer = document.querySelector(".slides");
//   const totalSlides = document.querySelectorAll(".slide").length;
//   let slideIndex = 0;
//   let slideInterval;


//   function changeSlide() {
//     slideIndex = (slideIndex + 1) % totalSlides;
//     slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
//     updateRadioButtons();
//   }


//   function updateRadioButtons() {
//     const radioButtons = document.querySelectorAll(".control");
//     radioButtons.forEach((radioButton, index) => {
//       radioButton.checked = index === slideIndex;
//     });
//   }


//   function startAutoplay() {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(changeSlide, 5000);
//   }

//   function stopAutoplay() {
//     clearInterval(slideInterval);
//   }


//   const carousel = document.querySelector(".carosel");
//   const dotsContainer = document.querySelector(".control");

//   carousel.addEventListener("mouseenter", stopAutoplay);
//   carousel.addEventListener("mouseleave", startAutoplay);

//   dotsContainer.addEventListener("mouseenter", stopAutoplay);
//   dotsContainer.addEventListener("mouseleave", startAutoplay);


//   const radioButtons = document.querySelectorAll(".control");
//   radioButtons.forEach((radioButton, index) => {
//     radioButton.addEventListener("click", () => {

//       slideIndex = index; // Update the slide index based on manual selection
//       slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
//       updateRadioButtons();
//       stopAutoplay();
//     });
//   });

//   updateRadioButtons();
//   startAutoplay();
// });


let button1 = document.querySelectorAll(".control");
let slide = document.querySelectorAll(".slide");
let prev=0;
let count=0;
let carosel=document.querySelector(".carosel");
button=Array.from(button1);
// console.log(button[0]);


carosel.addEventListener("mouseover",()=>{
  clearInterval(interval);
})

carosel.addEventListener("mouseleave",()=>{
  interval=setInterval(()=>{
    next(count==4?0:count+=1)
  },3000)
})

button.map((btn,index)=>{
  btn.addEventListener("click",()=>{
    next(index);
clearInterval(interval);
  })
})


let interval=setInterval(()=>{
  next(count==4?0:count+=1)
},3000)



function next(index) {
  clearInterval(interval);
  for (i = 0; i < 5; i++) {
    slide[i].className = slide[i].className.replace("active-slide", "");
    slide[i].style.animationName = "";

  }
  slide[prev].style.animationName="Prev";

  prev=index;
  count=index;


  slide[index].classList.add("active-slide");
  slide[index].style.animationName="Next";
  // console.log(slide[index])
  interval=setInterval(()=>{
    next(count==4?0:count+=1)
  },3000)
  button[index].checked=true;
}














