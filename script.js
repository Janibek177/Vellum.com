document.addEventListener('DOMContentLoaded', () => {
    
    const aboutBook = document.getElementById('aboutBook');
    const closeAbout = document.getElementById('closeAbout');

    aboutBook.addEventListener('click', () => {
        aboutBook.classList.add('expanded');
    });

    closeAbout.addEventListener('click', (e) => {
        e.stopPropagation();
        aboutBook.classList.remove('expanded');
    });

    document.querySelectorAll('.big-book').forEach(book => {
        book.querySelector('.big-cover').addEventListener('click', () => {
            book.classList.add('open');
        });
    });

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const closeModal = document.getElementById('closeModal');

    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            modalTitle.textContent = `Selected Edition: "${btn.getAttribute('data-book')}"`;
            modal.classList.add('active');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    document.getElementById('signupBtn').addEventListener('click', () => {
        const signInBook = document.getElementById('signInBook');
        signInBook.classList.add('open');
        signInBook.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('modalForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order successfully placed!');
        modal.classList.remove('active');
        e.target.reset();
    });

    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Successful login!');
        e.target.reset();
    });

    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        e.target.reset();
    });

});