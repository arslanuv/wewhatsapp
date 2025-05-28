// Basic interactivity for the navigation bar
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        alert(`Navigating to ${item.querySelector('p').textContent}`);
    });
});

// Deposit button alert
document.querySelector('.deposit-btn').addEventListener('click', () => {
    alert('Redirecting to Deposit Page...');
});