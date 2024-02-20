// Add this code after your existing JavaScript code
document.addEventListener("DOMContentLoaded", function () {
    // Fetch external data using JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayExternalData(data))
        .catch(error => console.error('Error fetching external data:', error));
});

function displayExternalData(data) {
    // Use template literals to build HTML string
    const html = `
        <ul>
            ${data.map(post => `<li>${post.title}</li>`).join('')}
        </ul>
    `;

    // Update the content of the data-container
    document.getElementById('data-container').innerHTML = html;
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}