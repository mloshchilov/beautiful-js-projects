const slides = document.querySelectorAll('.slide');

const removeActiveClasses = array => array.forEach( item => item.classList.remove('active'));

slides.forEach( (slide) => {
    slide.addEventListener('click', () => {
        removeActiveClasses(slides);
        slide.classList.add('active');
    });
});

