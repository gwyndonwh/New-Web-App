var footer = document.querySelector('footer h2');
footer.setAttribute('onmouseover', 'disclaimer("on")');
footer.setAttribute('onmouseleave', 'disclaimer("off")')

function disclaimer(state) {
    if(state == 'on') {
        footer.innerHTML = '*this site will NOT legally enlist you as an agent*';
    }
    else if(state == 'off') {
        footer.innerHTML = 'Become An Agent Today';
    }
}

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
document.getElementById('time').innerHTML = time;
console.log(time);


