document.addEventListener("DOMContentLoaded", () => {
// [1] Catch Element to Access it
    const themeToggleBtn = document.getElementById('themeToggle');

// [2] Dark Mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggleBtn.textContent = '☀️ الوضع النهاري';
} 

themeToggleBtn.addEventListener('click', () => {
// toggle => if find remove it , if unfind add it
document.body.classList.toggle('dark');
const isDarkMode = document.body.classList.contains('dark');
themeToggleBtn.textContent = isDarkMode ? '☀️ الوضع النهاري' : '🌙 الوضع الليلي';
localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
});