function modal() {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

modalTrigger.forEach(item => {
    item.addEventListener('click', openModal);
});

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal(modal);
    }
});

document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('show') && e.code === 'Escape') {
        closeModal();
    }
});

const modalTimerId = setTimeout(openModal, 50000);

function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll); 
}

module.exports = modal;