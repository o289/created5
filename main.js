const button = document.getElementById('button');
const from = document.getElementById('hidden-from')
button.addEventListener('click', function() {
    from.classList.toggle('get')
});