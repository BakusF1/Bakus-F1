document.getElementById('komentar-forma').addEventListener('submit', function(e) {
    e.preventDefault();
    const ime = this.querySelector('input').value;
    const komentar = this.querySelector('textarea').value;

    const komentarDiv = document.createElement('div');
    komentarDiv.innerHTML = `<strong>${ime}:</strong> <p>${komentar}</p>`;
    document.getElementById('komentari-lista').appendChild(komentarDiv);

    this.reset();
});