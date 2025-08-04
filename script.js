// Toggle panel menu on small screens
document.querySelector('.panel-all').addEventListener('click', () => {
    const panelOps = document.querySelector('.panel-ops');
    panelOps.classList.toggle('show-panel');
});

// Smooth scroll to top when "Back to Top" is clicked
document.querySelector('.foot-panel1').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
