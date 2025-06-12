document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('theme-btn');
    const html = document.documentElement;
    themeBtn.addEventListener('click', function () {
        if (html.getAttribute('data-theme') === 'dark') {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
    // Mantener preferencia al recargar
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        html.setAttribute('data-theme', 'dark');
    }
});
