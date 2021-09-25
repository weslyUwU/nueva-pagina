let lienzo = document.getElementById("lienzo");
let raton = {};

lienzo.addEventListener("click", (evt) => {
    raton = oMousePos(lienzo, evt);
    analisis();
});

let ctx = lienzo.getContext('2d');

let x1 = 200;
let x2 = 700;
let y1 = 280;
let y2 = 280;


function drawYoN() {


    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, lienzo.width, lienzo.height);

    ctx.font = "45px Verdana";
    ctx.strokeStyle = "#532ff5";
    ctx.lineWidth = 2;
    ctx.strokeText("¿Quieres ser mi novia?", 260, 120);

    ctx.fillStyle = "#215E"; //cuadro para el si
    ctx.fillRect(x1, y1, 150, 60);

    ctx.fillStyle = "#215"; // cuadro para el no
    ctx.fillRect(x2, y2, 150, 60);

    ctx.strokeStyle = "532ff5";
    ctx.strokeText("No", (x1 + 40), (y1 + 45));

    ctx.strokeStyle = "#532ff5";
    ctx.strokeText("Si", (x2 + 50), (y2 + 45));

}


function analisis() {
    // console.log(raton.x + " x2: "+ x1 + " " + raton.y + " y2 " + y1);
    if (raton.x > x1 && raton.y > y1 && raton.x < (x1 + 150) && raton.y < (y1 + 60)) {
        // console.log("le dieron al no");
        x1 = Math.floor(Math.random() * (800 + 1));
        y1 = Math.floor(Math.random() * (300 + 1));
        drawYoN()
    }
    if (raton.x > x2 && raton.y > y2 && raton.x < (x2 + 150) && raton.y < (y2 + 60)) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, lienzo.width, lienzo.height);
        ctx.font = "80px Verdana";
        ctx.strokeStyle = "#532ff5";
        ctx.lineWidth = 2;
        ctx.strokeText("Sabía que aceptarias:3", 50, 220);
    } else {
        return;
    }

}



function oMousePos(canvas, evt) {
    let ClientRect = canvas.getBoundingClientRect();
    return {
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top)
    }
}

drawYoN()