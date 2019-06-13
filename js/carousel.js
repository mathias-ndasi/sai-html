window.onload = function(){

    let track = document.querySelector('.carousel__track');
    let slides = Array.from(track.children);
    let nextButton = document.querySelector('.carousel__btn--right');
    let prevButton = document.querySelector('.carousel__btn--left');
    let dotsNav = document.querySelector('.carousel__nav');
    let dots = Array.from(dotsNav.children);

    let slideWidth = slides[0].getBoundingClientRect().width;

    // set slides next to each other
    let setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // move the slide
    let moveSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left +')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    // update slide indicators
    let updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    };

    // move slide to the left
    prevButton.addEventListener('click', prev => {
        let currentSlide = track.querySelector('.current-slide');
        let prevSlide = currentSlide.previousElementSibling;
        let currentDot = dotsNav.querySelector('.current-slide');
        let prevDot = currentDot.previousElementSibling;

        moveSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
    });

    // move slide to the right
    nextButton.addEventListener('click', next => {
        let currentSlide = track.querySelector('.current-slide');
        let nextSlide = currentSlide.nextElementSibling;
        let currentDot = dotsNav.querySelector('.current-slide');
        let nextDot = currentDot.nextElementSibling;

        moveSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);

        // track.remove(nextSlide.previousElementSibling)
        // track.appendChild(nextSlide.previousElementSibling);

        // console.log(nextSlide.previousElementSibling)
    });

    // moving slide with respect to the indicators
    dotsNav.addEventListener('click', e => {
        let targetDot = e.target.closest('button');

        if(!targetDot) return;

        // do this only if area clicked is a button
        let currentSlide = track.querySelector('.current-slide');
        let currentDot = dotsNav.querySelector('.current-slide');
        let targetIndex = dots.findIndex(dot => dot === targetDot);
        let targetSlide = slides[targetIndex];
        
        moveSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
    });
}