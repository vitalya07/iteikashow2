const actionImg = document.querySelector('.main__left-icon');

const imgAmimation = actionImg.animate([
    {transform: 'scale(1)'},
    {transform: 'scale(.6)'},
    {transform: 'scale(.9)'},
    {transform: 'scale(1)'},
], {
    duration: 1500,
    iterations: Infinity
});