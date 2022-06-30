var isJumping = false;
var points = 0;
var time = 1.8;

const cat = document.querySelector('.cat-walk');
const wall = document.querySelector('.wall');
const clouds = document.querySelector('.clouds');
const score = document.getElementById('score');

const jump = () => {
    isJumping = true;
    cat.classList.add('jump');

    setTimeout(() => {
        cat.classList.remove('jump');
        isJumping = false;
    }, 600);
}

const loop = setInterval(() => {
    const wallPosition = wall.offsetLeft;
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');

    if(wallPosition <= 220 && wallPosition > 0 && catPosition < 80) {
        wall.style.animation = 'none';
        wall.style.left = `${wallPosition}px`;

        cat.style.animation = 'none';
        cat.style.bottom = `${catPosition - 30}px`;
        cat.src = './images/sad_cat.png';
        cat.style.width = '150px';
        cat.style.marginLeft = '65px';
        
        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px`;

        clearInterval(loop);
        clearInterval(scoreLoop);
    }
}, 10);

const scoreLoop = setInterval(() => {
    score.innerHTML = points;
    points += 20;
}, 300);

document.body.onkeydown = function(e) {
    if ((e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32) &&
        !isJumping     
    ) {
      jump();
    }
}