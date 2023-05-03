let reviewStar1 = document.querySelector('.reviewStar1')
let reviewStar2 = document.querySelector('.reviewStar2')
let reviewStar3 = document.querySelector('.reviewStar3')
let reviewStar4 = document.querySelector('.reviewStar4')
let reviewStar5 = document.querySelector('.reviewStar5')
let allstars    = document.querySelectorAll('.reviewStar')
let addReviews = document.getElementById('addReviews');
let ReviewBox = document.getElementById('mainbox');
let closeBtn = document.getElementById('closeBtn');
let writeMsg = document.getElementById('writeMsg');
let box = document.getElementById('box');
let loader = document.getElementById('loader');

setTimeout(() => {
    loader.style.display="none";
}, 3000);

addReviews.onclick = () => {
    ReviewBox.classList.add('active');
    box.style.filter="blur(10px)";
}

closeBtn.onclick = () => {
    ReviewBox.classList.remove('active');
    removeStars();
    writeMsg.value = '';
    box.style.filter="blur(0)";

}

reviewStar1.onclick = () =>{
    removeStars()
    reviewStar1.classList.add('activeStar');
}
reviewStar2.onclick = () =>{
    removeStars()
    reviewStar1.classList.add('activeStar');
    reviewStar2.classList.add('activeStar');
}
reviewStar3.onclick = () =>{
    removeStars()
    reviewStar1.classList.add('activeStar');
    reviewStar2.classList.add('activeStar');
    reviewStar3.classList.add('activeStar');

}
reviewStar4.onclick = () =>{
    removeStars()
    reviewStar1.classList.add('activeStar');
    reviewStar2.classList.add('activeStar');
    reviewStar3.classList.add('activeStar');
    reviewStar4.classList.add('activeStar');
    
}
reviewStar5.onclick = () =>{
    removeStars()
    reviewStar1.classList.add('activeStar');
    reviewStar2.classList.add('activeStar');
    reviewStar3.classList.add('activeStar');
    reviewStar4.classList.add('activeStar');
    reviewStar5.classList.add('activeStar');
    
}
function removeStars() {
    allstars.forEach( e =>{
        e.classList.remove('activeStar');
    })
    
}
    


