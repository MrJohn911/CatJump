var isJumping = false;

const cat = document.querySelector('.cat-walk');
const wall = document.querySelector('.wall');

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

    if(wallPosition <= 220 && wallPosition > 0 && catPosition < 80) {
        wall.style.animation = 'none';
        wall.style.left = `${wallPosition}px`;

        cat.style.animation = 'none';
        cat.style.bottom = `${catPosition - 30}px`;
        cat.src = './images/sad_cat.png';
        cat.style.width = '150px';
        cat.style.marginLeft = '65px';
        

        clearInterval(loop);
    }

}, 10);

document.body.onkeydown = function(e) {
    if ((e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32) &&
        !isJumping     
    ) {
      jump();
    }
}