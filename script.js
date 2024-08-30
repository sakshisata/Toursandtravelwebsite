let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let Videobtn = document.querySelectorAll('.vid-btn');

// Close menus and forms when scrolling
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

// Toggle navbar on menu click
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Toggle search bar on search button click
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// Show login form on login button click
formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

// Hide login form on close button click
formclose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// Video slider functionality
Videobtn.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from current button
        document.querySelector('.controls .active').classList.remove('active');
        
        // Add active class to the clicked button
        btn.classList.add('active');
        
        // Update video source
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
        
        // Reset and play the video after changing the source
        let video = document.querySelector('#video-slider');
        video.load();  // Reload the video with the new source
        video.play();  // Play the video after loading
    });
});

