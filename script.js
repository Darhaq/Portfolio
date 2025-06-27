const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = localStorage.getItem('theme') ||
                     (prefersDarkScheme.matches ? 'dark' : 'light');
document.body.classList.toggle('dark-mode', currentTheme === 'dark');

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '🌞' : '🌙';
});

themeToggle.textContent = currentTheme === 'dark' ? '🌞' : '🌙';

const backToTop = document.getElementById("backToTop");
window.onscroll = function () {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};

backToTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
};
