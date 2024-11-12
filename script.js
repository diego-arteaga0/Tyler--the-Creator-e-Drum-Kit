let bgMusic = document.getElementById("music");
bgMusic.volume = 0.6;
let bg = document.body.style.backgroundImage;


function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

//toggles mute for the background music playing
function toggleMute(){
    const music = document.getElementById("music");
    const button = document.getElementById("muteButton");

    if(music.muted){
        music.muted = false;
        button.textContent = "🔇";
    } else {
        music.muted = true;
        button.textContent = "🔊";
    }
}

function changeBackground(url){
    bg = `url('${url}')`;
}
function changeFB(){
    document.body.style.backgroundImage = "url('backgrounds/boy_1.jpg')";
}
function changeES(){
    document.body.style.backgroundImage = "url('backgrounds/sale_1.png')";
}
function changeIGOR(){
    document.body.style.backgroundImage = "url('backgrounds/2179245.jpg')";
}
function changeGOLF(){
    document.body.style.backgroundImage = "url('backgrounds/golf.png')";
}
function changeWOLF(){
    document.body.style.backgroundImage = "url('backgrounds/wolf.jpg')";
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



//drop down for each instrument to swap, swap background music, swap background photo/style