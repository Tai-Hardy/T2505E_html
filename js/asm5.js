JavaScript



const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupOverlay = document.getElementById('popupOverlay');


function openPopup() {
    popupOverlay.classList.add('active');
}


function closePopup() {
    popupOverlay.classList.remove('active');
}


openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);


popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        closePopup();
    }
});s