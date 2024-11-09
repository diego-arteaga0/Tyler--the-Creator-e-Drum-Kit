let bgMusic = document.getElementById("music");
bgMusic.volume = 0.6;


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

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



//drop down for each instrument to swap, swap background music, swap background photo/style