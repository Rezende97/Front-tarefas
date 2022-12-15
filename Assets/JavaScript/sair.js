const out = document.querySelector('#out');

out.addEventListener('click', () => {

    localStorage.removeItem('id');
    localStorage.removeItem('acesso');

    window.location.href = '../../index.html';
})