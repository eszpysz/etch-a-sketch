const container = document.querySelector('.container');

const width = Math.floor(window.innerWidth / 16);
const height = Math.floor(window.innerHeight / 16);

for (let i = 0; i < width * height; i++) {
    const div = document.createElement('div');
    div.classList.add('div');
    container.appendChild(div);
}

container.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.classList.contains('div')) {
        target.style.backgroundColor = 'red';
    }
});