let ghost;
let x=0;
let y=0;

document.addEventListener('DOMContentLoaded', (event) => {
    ghost = document.getElementById("ghost");
    setTimeout(timeout, 100);
});

function timeout() {
    console.log(ghost);

    let range = 100;
    let diffx = getRandomInt(range)-range/2;
    let diffy = getRandomInt(range)-range/2;

    x = x + diffx;
    y = y + diffy;

    if (x>300){ x=300; }
    if (x<-300){ x=-300; }

    if (y>300){ y=300; }
    if (y<-300){ y=-300; }
    
    ghost.style=`transform: translate(${x}px, ${y}px)`;
   
    setTimeout(timeout, 500);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
