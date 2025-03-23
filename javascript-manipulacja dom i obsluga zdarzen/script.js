
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');


function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1; 
    } else if (index >= slides.length) {
        currentSlide = 0; 
    } else {
        currentSlide = index;
    }

 
    slides.forEach(slide => slide.style.display = 'none');
    
    slides[currentSlide].style.display = 'block';
}


nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});


prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});


showSlide(currentSlide);
