const themeToggleBtn = document.getElementById('themeToggle');


const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☾';
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = '𖤓';
}

// Toggle function
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = 'light';
    
    if (currentTheme === 'light') {
        newTheme = 'dark';
        themeToggleBtn.textContent = '☾';
    } else {
        themeToggleBtn.textContent = '𖤓';
    }
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
