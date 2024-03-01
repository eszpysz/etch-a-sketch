const container = document.querySelector('.container');

const btn = document.querySelector('button');

let interactionsCount = 0;

startDrawing();

btn.addEventListener('click', () => {
    let squaresVertical = prompt('Enter number of squares vertically:');
    let squaresHorizontal = prompt('Enter number of squares horizontally:');

    if ((squaresVertical <= 50 && squaresVertical > 0) &&
        (squaresHorizontal <= 50 && squaresHorizontal > 0)) 
    {
        container.style.width = squaresHorizontal * 16 + 'px';
        container.style.height = squaresVertical * 16 + 'px';

        removePreviousDrawing();
        startDrawing();
    } else {
        alert('ERROR!\nPlease, enter a number between 1-50.');
    }
});

container.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.classList.contains('div')) {
        interactionsCount++;
        target.style.backgroundColor = getRandomRGB();
    }
});

function startDrawing() {
    for (let i = 0; i < ((container.clientWidth/16) * (container.clientHeight/16)); i++) {
        const div = document.createElement('div');
        div.classList.add('div');
        div.style.height = '16px';
        div.style.width = '16px';
        container.appendChild(div);
    }
}

function removePreviousDrawing() {
    let divsToDelete = document.querySelectorAll('.div')

    divsToDelete.forEach(div => {
        div.remove();
    });
}

function getRandomRGB() {
    let hue = Math.floor(Math.random() * 360);
    let saturation = '100%';
    let lightness = Math.max(0, 100 - (10 * interactionsCount)) + '%';

    return 'hsl(' + hue + ', ' + saturation + ', ' + lightness + ')';
}