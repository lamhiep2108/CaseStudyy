let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let scoreshow=document.getElementById('score');
    let birdImg = new Image();
    let background = new Image();
    let tobeOn = new Image();
    let tobeBelow = new Image();
    let point = new Audio("point.ogg");
    let wing=new Audio("wing.wav")
    birdImg.src = "bird.png"
    background.src = "background.png";
    tobeOn.src = "tobeOn.png";
    tobeBelow.src = "tobeBelow.png";
    let score = 0;
    let distanceOf2Tubes = 140;
    let distanceToTheLowerTube;
    let bird = {
        x: background.width / 5,
        y: background.height / 2
    }
    let ong = [];
    ong[0] = {
        x: canvas.width,
        y: 0
    }
    function run() {
        // load hình ảnh vào
        context.drawImage(background, 0, 0);
        context.drawImage(birdImg, bird.x, bird.y);

        for (let  i = 0; i < ong.length; i++) {
            distanceToTheLowerTube = tobeOn.height + distanceOf2Tubes;
            context.drawImage(tobeOn, ong[i].x, ong[i].y);
            context.drawImage(tobeBelow, ong[i].x, ong[i].y + distanceToTheLowerTube);
            ong[i].x -=5;//để ống di chuyển

            if (ong[i].x == canvas.width / 2) {
                ong.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * tobeOn.height) - tobeOn.height
                })
            }
            if (ong[i].x == 0) ong.splice(0, 0);

            if (ong[i].x == bird.x) {
                point.play()
            score++;}

            if (bird.y + birdImg.height == canvas.height ||
                bird.x + birdImg.width >= ong[i].x && bird.x <= ong[i].x + tobeOn.width
                && (bird.y <= ong[i].y + tobeOn.height ||
                    bird.y + birdImg.height >= ong[i].y + distanceToTheLowerTube)
            ) {
                check()
            return
            }
        }
        scoreshow.innerHTML = "score: " + score;

        bird.y +=3;
        requestAnimationFrame(run)
    }

    document.addEventListener("mousedown",function () {
        wing.play();
        bird.y -= 60;
    })
let value= document.getElementById('start').value;
    value=document.getElementById('input').innerHTML

function check(){
    let a = alert('bạn được: '+score+ " điểm")
    if (a==true){
        location.reload()

    }else {
       document.getElementById('reset').innerHTML ="<button type='button' id='reset' onclick='reset()'>reset</button>"
    }
}
function reset(){
    location.reload()
}


