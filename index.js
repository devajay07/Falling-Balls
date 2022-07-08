let canvas = document.querySelector('canvas');
canvas.width = this.innerWidth;
canvas.height = this.innerHeight;
let c = canvas.getContext('2d');

const colorArray = [
    "rgb(233, 213, 202)",
    "rgb(130, 115, 151)",
    "rgb(77, 76, 125)",
    "rgb(54, 48, 98)"
  ]

function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random()*4)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 45, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
      };
    
    this.update = function(){
        if(this.y + radius+this.dy>window.innerHeight || this.y - radius <=0){
            dy = -dy*0.95;
        }
        else{
            dy += 1;
            
        }
         this.y += dy;
         
        if(this.x + radius>window.innerWidth|| this.x - radius <=0){
            dx = -dx*0.95;
        }
        this.x += dx;
        
       
    };
}

let circleArray;
function init(){
     circleArray =[];
    for(var i =0;i<window.innerWidth/30+5;i++){
        let radius = Math.random()*15 +15;
        let x = Math.random()*(innerWidth-radius*2+2)+radius;
        let y = Math.random()*(innerHeight-radius*2) + radius ;
        let dx = (Math.random()-0.6)*2;
        let dy = Math.random()*2;
        circleArray.push(new Circle(x,y,dx,dy,radius));
    
    }
}
init();

addEventListener('click',function(){
   init();
})
addEventListener('resize',function(){
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight;
   init();
})
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, this.innerWidth, this.innerHeight);

    for(var i=0;i<window.innerWidth/30+5;i++){
     
        circleArray[i].draw();
        circleArray[i].update();
    }
}
animate();