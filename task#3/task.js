let counterAim = document.getElementById('dead');
let counterLost = document.getElementById('lost');
let aim = 0;
let lost = 0;


function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.addEventListener( 'click', function() {
        if (hole.classList.contains( 'hole_has-mole')) {
            aim++;
            counterAim.textContent = aim;
        }
        else {
            lost++;
            counterLost.textContent = lost;
        }
        if (aim == 10) {alert('Победа!');
        aim = 0;
        counterAim.textContent = aim;
        lost = 0;
        counterLost.textContent = lost;};
        if (lost == 5) {alert('Проиграл!');
        aim = 0;
        counterAim.textContent = aim;
        lost = 0;
        counterLost.textContent = lost;};
        });
    };


