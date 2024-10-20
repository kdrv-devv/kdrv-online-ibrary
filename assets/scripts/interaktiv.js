// barsni ochib yopish 

let barsOpen = document.querySelectorAll("#open-bars")
let showcaseTopCenter = document.querySelector(".showcase-top-center")

// barsOpen.addEventListener("click",()=>{

// showcaseTopCenter.classList.toggle("left0")

// })


barsOpen.forEach((btn)=>{
    btn.addEventListener("click",()=>{

 showcaseTopCenter.classList.toggle("left0")

    })
})