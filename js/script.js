let ghost;

document.addEventListener('DOMContentLoaded', (event) => {
    ghost = document.getElementById("ghost");
    setTimeout(timeout, 100);
});

function timeout() {
    console.log(ghost);

    let x = getRandomInt(500)-250;
    let y = getRandomInt(500)-250;
    ghost.style=`transform: translate(${x}px, ${y}px)`;

   
    setTimeout(timeout, 300);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
