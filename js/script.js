'use strict'
document.addEventListener('DOMContentLoaded', ()=> {
    //Гамбургер
    const hamburger = document.querySelector('.hamburger'),
          header = document.querySelector('.header');
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('open')
    });
    
    //слайдеры
    const photoSwiper = new Swiper('.slide-photo', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 80,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
         breakpoints: {
            280: {
                slidesPerView: 1,         
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 30, 
            },
            993: {
                slidesPerView: 3,
            },
            1920: {
                slidesPerView: 4, 
            },
        },
    });

     const videoSwiper = new Swiper('.slide-video', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 80,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
         breakpoints: {
            280: {
                slidesPerView: 1,         
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 30, 
            },
            993: {
                slidesPerView: 3,
            },
            1920: {
                slidesPerView: 4, 
            },
        },
    });

    const feedbackSwiper = new Swiper('.slide-feedback', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 80,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
         breakpoints: {
            280: {
                slidesPerView: 1,         
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 30, 
            },
            993: {
                slidesPerView: 3,
            },
            1920: {
                slidesPerView: 4, 
            },
        },
    });
    //Модальные окна
    const modal = document.querySelector('.modal')
    const dataModal = document.querySelectorAll('[data-modal]');
    let dataPresents = document.querySelector('[data-presents]');
    let modalTitle = document.querySelector('.modal__header-title')
    const showModal =()=> {
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.style.overflow = 'hiden'
    }
    const hideModal = ()=> {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = 'hiden'
    }
    dataModal.forEach(item => item.addEventListener('click', showModal));
    dataPresents.addEventListener('click', ()=> {
        modalTitle.textContent = 'Заказать сертификат'
        showModal();

    })
    modal.addEventListener('click', (e)=> {
        if(e.target == modal || e.target.classList.contains('modal__close')) {
            hideModal()
        }
    });
    window.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape' && modal.classList.contains('show')) {
            hideModal()
        }
    });
})

