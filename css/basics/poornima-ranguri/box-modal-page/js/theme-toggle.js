
const themeToggleBtn = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme');


if (currentTheme) {
    document.body.classList.add(currentTheme);
}


themeToggleBtn.addEventListener('click', () => {

    document.body.classList.toggle('dark-theme');

  
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.removeItem('theme');
    }
});
