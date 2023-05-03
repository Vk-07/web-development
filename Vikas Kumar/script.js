let reviewStar1 = document.querySelector(".reviewStar1");

let reviewStar2 = document.querySelector(".reviewStar2");

let reviewStar3 = document.querySelector(".reviewStar3");

let reviewStar4 = document.querySelector(".reviewStar4");

let reviewStar5 = document.querySelector(".reviewStar5");

let allStars = document.querySelectorAll('.reviewStar');

let closeBox = document.getElementById("closeBox");
let box = document.getElementById("box");

closeBox.onclick = () => {
    box.classList.add('active');
}
reviewStar1.onclick = () => {
    removeStars();
    reviewStar1.classList.add('activeStar');
}
reviewStar2.onclick = () => {
    removeStars();
    reviewStar1.classList.add('activeStar');
    reviewStar2.classList.add('activeStar');
}
reviewStar3.onclick = () => {
    removeStars();
    reviewStar1.classList.add('activeStar');
    reviewStar2.classList.add('activeStar');
    reviewStar3.classList.add('activeStar');
}
reviewStar4.onclick = () => {
    removeStars();
    reviewStar1.classList.add('activeStar');
    reviewStar2.classList.add('activeStar');
    reviewStar3.classList.add('activeStar');
    reviewStar4.classList.add('activeStar');
}

reviewStar5.onclick = () =>{
    removeStars();
    reviewStar1.classList.add('activeStar');
    reviewStar2.classList.add('activeStar');
    reviewStar3.classList.add('activeStar');
    reviewStar4.classList.add('activeStar');
    reviewStar5.classList.add('activeStar');
}

// function removeStars(){
//     allStars.forEach(e =>{
//         e.classList.remove('activeStar');
//     })
// }
    