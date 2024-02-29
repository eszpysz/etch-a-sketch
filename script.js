const container = document.querySelector('.container');

const btn = document.querySelector('button');

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

container.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.classList.contains('div')) {
        target.style.backgroundColor = 'red';
    }
});