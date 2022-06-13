console.log('Выполено только смена кариток и добавленный эффекты к кнопкам')

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('open');
  navList.classList.toggle('nav-list-open');
})
navLink.forEach(function(item){
  item.addEventListener('click', function(){
    hamburger.classList.remove('open');
    navList.classList.remove('nav-list-open');
  })
})
//switch image portfolio

const portfolioImages = document.querySelectorAll('.portfolio-item');
const portfolioButtons = document.querySelector('.portfolio-button');
const portfolioBtn = document.querySelectorAll('.portfolio-btn');
function changeImage(event){
  if(event.target.classList.contains('portfolio-btn')) {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    portfolioBtn.forEach(button => button.classList.remove('portfolio-btn-active'));
    event.target.classList.add('portfolio-btn-active');
  }
}
portfolioButtons.addEventListener('click', changeImage);

//cache images

const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadSummerImages(seasons) {
  seasons.forEach((value) => {
    for (let i = 1; i < 7; i++){
      const img = new Image();
      img.src = `assets/img/${value}/${i}.jpg`;
    };
  });
}
preloadSummerImages(seasons);

//switch lng
// import i18Obj from './translate.js';
// const switchLanguage = document.querySelector('.switch-lng');
// const dataElement = document.querySelectorAll('[data-i18]');
// const switchRu = 'ru';
// const switchEn = 'en';


//   for(let elem of dataElement){
//     console.log(dataElement)
//   }
// switchLanguage.addEventListener('click',() =>{
//   console.log('click')
// })
