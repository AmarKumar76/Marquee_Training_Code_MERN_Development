const canvas = document.getElementById("paintcanvas")
const ctx = canvas.getContext('2d')
const clearbtn = document.getElementById('clearbtn')

//drawing state
let isdrawing = false;
let brushColor = "#cfd0d3";
let brushWidth = 5;

// user click and hold the board->draw hogo
canvas.addEventListener("mousedown",(event)=>{
    isdrawing=true;
    ctx.beginPath()
    ctx.moveTo(event.offsetX ,event.offsetY)
})

canvas.addEventListener("mouseup",()=>{
    isdrawing=false;
    ctx.closePath();
})

//mouse move event
canvas.addEventListener('mousemove',(event)=>{
    if(!isdrawing){
        return // if mouse is not hold
    }
    ctx.lineWidth = brushWidth;
    ctx.lineCap = 'round'
    ctx.strokeStyle = brushColor;
    ctx.lineTo(event.offsetX,event.offsetY)
    ctx.stroke();
} );

canvas.addEventListener("mouseleave", () =>{
    isdrawing= false;
})

canvas.addEventListener("mouseenter",()=>{
    console.log("you can draw");
})

//clear board
clearbtn.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

})

canvas.addEventListener('dblclick',()=>{
    const randomBg = `hsl(${Math.random() * 360}, 80%, 80%)`;
canvas.style.backgroundColor = randomBg;
})

// right click: change brush colour (and stop browser context menu)

canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const color =['red','green','white','black']
    const random = color[Math.floor(Math.random()*color.length)];
    brushColor = random;
    canvas.style.color=brushColor;
});
