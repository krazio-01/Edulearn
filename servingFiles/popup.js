const closeBtn = document.querySelector('.close-button');
const popup = document.querySelector('.popup');

closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
    window.location.href = "/";
});