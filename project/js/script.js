const isJumping = false;

const cat = document.querySelector('.cat-walk');
const wall = document.querySelector('.wall');

const jump = () => {
    
    cat.classList.add('jump');

    setTimeout(() => {

        cat.classList.remove('jump');

    }, 800);
}

const loop = setInterval(() => {

    const wallPosition = wall.offsetLeft;
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px', '');

    console.log(catPosition);

    if(wallPosition <= 220 && wallPosition > 0 && catPosition < 10) {
        wall.style.animation = 'none';
        wall.style.left = `${wallPosition}px`;
    }

}, 10);

document.body.onkeydown = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
      jump();
    }
}