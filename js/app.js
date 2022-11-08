new Swiper('.header__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,
  simulateTouch: false,
  speed: 1000,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 20,
});

new Swiper('.other-news__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
  simulateTouch: true,
  speed: 800,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 20,
  initialSlide: 1,
  autoplay: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    610: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    710: {
      slidesPerView: 2.1,
      spaceBetween: 10,  
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const scrollImations = (entries, observer) => {
  entries.forEach((entry) => {

    if(entry.isIntersecting) {
      entry.target.classList.add('anim-active');
    }
  });
}

const options = {
  threshold: 0
};
const observer = new IntersectionObserver(scrollImations);

const boxes = document.querySelectorAll('.use-anim');
boxes.forEach((box) => {
  observer.observe(box);
});

const menuBtn = document.querySelector('.navigation__btn');
const menu = document.querySelector('.navigation__menu')
const links = document.querySelector('.menu__links');
const downLinks = document.querySelector('.menu__contacts');

menuBtn.addEventListener('click', function(){
  if(!menu.classList.contains('active')){
    menuBtn.classList.add('active');
    menu.classList.add('active');
    setTimeout(function(){links.classList.add('active')}, 200);
    setTimeout(function(){downLinks.classList.add('active')}, 400);
    setTimeout(function(){menuBtn.classList.add('anim')}, 200);
    setTimeout(function(){menu.classList.add('anim')}, 0);
    document.body.style.overflow = 'hidden'
  } else {
    links.classList.remove('active');
    setTimeout(function(){downLinks.classList.remove('active')}, 50);
    setTimeout(function(){menu.classList.remove('anim')}, 350);
    menuBtn.classList.remove('anim');
    setTimeout(function(){menuBtn.classList.remove('active')}, 0);
    setTimeout(function(){menu.classList.remove('active')}, 750);
    document.body.style.overflow = 'auto'
  }
});



function chooseGoods(){

const filterBtn = document.querySelectorAll('.product__filter');
const filterTable = document.querySelectorAll('.product__list');
    
function findTable(items, category){
    items.forEach(function(card){
    const isItemFiltered = card.classList.contains(category);
    if(!isItemFiltered){
        card.classList.add('none');
        card.classList.add('hide');
    }
    else{
        card.classList.remove('none');
        setTimeout(function(){card.classList.remove('hide')}, 0);
    }
  })
}
    
filterBtn.forEach(function(button){
    button.addEventListener('click', function(){
    isActive()
    button.classList.add('active')
    const btnData = button.dataset.filter;
    findTable(filterTable, btnData);
    })
})
  
  
function isActive(){
    filterBtn.forEach(function(button){
    const haveActive = button.classList.contains('active');
    if(haveActive){
        button.classList.remove('active');
    }
    })
  } 
}
    
chooseGoods();


const modalOpenBtn = document.querySelectorAll('.request-btn');
const modalWindow = document.querySelector('.modal__window');
const modalCloseBtn = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal__container');
const requestContainer = document.querySelector('.request__container');

modalOpenBtn.forEach(function(btn){
  
  btn.addEventListener('click', function(){
  modalWindow.classList.add('active');
  setTimeout(function(){modalWindow.classList.add('anim')}, 0);
  setTimeout(function(){requestContainer.classList.add('active')}, 0);
  document.body.style.overflow = 'hidden';
});
});

modalCloseBtn.addEventListener('click', function(){
  setTimeout(function(){modalWindow.classList.remove('active')}, 500);
  modalWindow.classList.remove('anim');
  requestContainer.classList.remove('active');
  if(!menu.classList.contains('active')){
    document.body.style.overflow = 'auto';
  }
})

modalWindow.addEventListener('click', function(event){
  if(!event.composedPath().includes(modalContainer)){
		setTimeout(function(){modalWindow.classList.remove('active')}, 500);
    modalWindow.classList.remove('anim');
    requestContainer.classList.remove('active');
    if(!menu.classList.contains('active')){
      document.body.style.overflow = 'auto';
    }
	}
})


const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
const elSelectCustomValue = elSelectCustom.children[0];
const elSelectCustomOptions = elSelectCustom.children[1];
const defaultLabel = elSelectCustomValue.getAttribute("data-value");

Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
  elOption.addEventListener("click", (e) => {

    elSelectCustomValue.textContent = e.target.textContent;

    elSelectCustom.classList.remove("isActive");
  });
});

elSelectCustomValue.addEventListener("click", (e) => {
  elSelectCustom.classList.toggle("isActive");
});

document.addEventListener("click", (e) => {
  const didClickedOutside = !elSelectCustom.contains(event.target);
  if (didClickedOutside) {
    elSelectCustom.classList.remove("isActive");
  }
});