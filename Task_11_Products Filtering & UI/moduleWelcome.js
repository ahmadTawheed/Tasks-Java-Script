document.addEventListener("DOMContentLoaded", () => {

// [1] Catch Element to Access it
    const welcomeModal = document.getElementById('welcomeModal');
    const closeModalBtn = document.getElementById('closeModal');
    
// [2] Generate Welcome Msg
if (!localStorage.getItem('visited')) {
    welcomeModal.style.display = 'block';
    localStorage.setItem('visited', 'true')
}
// close Btn Logic
closeModalBtn.onclick = () => {
    welcomeModal.style.display = 'none';
}
// close welcome Msg if onclick window , e = event
window.onclick = (e) => {
if(e.target == welcomeModal) {
    welcomeModal.style.display = 'none'
}}
});