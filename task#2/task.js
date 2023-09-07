let counter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let rate = document.getElementById('rate__click');
let date = Date.now();
let diffdate = 0;

cookie.onclick = () => {
    if (Number(counter.textContent) % 2 == 0) {
        cookie.width += 30; 
        cookie.height += 30;
    }
    else {
        cookie.width -= 30; 
        cookie.height -= 30;
    }
    counter.textContent  = Number(counter.textContent) + 1;
    diffdate = (Date.now() - date) / 1000;
    date = Date.now()
    rate.textContent = (1 / diffdate).toFixed(2);
}

