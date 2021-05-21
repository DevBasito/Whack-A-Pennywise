let holes = document.querySelectorAll('#hole');
let playbtn = document.getElementById('play');
let stopbtn = document.getElementById('stop');
let playAgain = document.getElementById('playAgain');
let  game;
let hammer = document.querySelector('.whac');
let btn = document.getElementById('btn');
let whacArea = document.getElementById('holes')
let x = 0;


document.getElementById('score').innerHTML = x;


playbtn.addEventListener('click', function () {

    playbtn.disabled = true;
    let laugh = document.getElementById('laugh');
    laugh.play();
    let currentTime= 30;

    game = setInterval(function () {
        let num = Math.floor(Math.random() * 8);
        let hole = holes[num];
        let image = document.createElement('img');
        image.setAttribute('src', './img/pennywise.png');
        image.setAttribute('class', 'mole');
        let pennywise = hole.appendChild(image);
        pennywise;

        pennywise.addEventListener('click', function () {
            document.getElementById('score').innerHTML = ++x;
            let whack = document.getElementById('whack');
            whack.play();
        })

        setTimeout(function () {
            hole.removeChild(image)
        }, 800)

    }, 900)


    function countdown( ) {
        currentTime--;
        document.getElementById('timer').innerHTML= currentTime;
        if (currentTime == 0) {
            clearInterval(countDownTimer);
            gameStop();
        }
    }
    let countDownTimer= setInterval(countdown, 3000)

})

function gameStop( ) {
    let buzzer= document.getElementById('buzzer');
    buzzer.play();

    clearInterval(game);
    let gameArea= document.querySelector('#gameArea');
    gameArea.style.display= 'none';
    let gameOver= document.querySelector('#gameOver');
    gameOver.style.display= 'block';
    
    let icecream= document.getElementById('icecream');
    icecream.play();
    
    let result = document.getElementById('result');
    result.innerHTML= x;
  
    let elaugh= document.getElementById('elaugh');
    elaugh.play(); 

    playAgain.addEventListener('click', function(){
        window.location.replace('./index.html')
    })
}

stopbtn.addEventListener('click', gameStop)


function cursor(e) {
    hammer.style.top = e.pageY + "px";
    hammer.style.left = e.pageX + "px";
}

whacArea.addEventListener('mousemove', cursor);


