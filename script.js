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

function changeBG(button){
    switch (button.id){
        case "wolf":
            document.body.style.backgroundImage = "url('backgrounds/wolf.jpg')";
            break;
        case "cherry":
            document.body.style.backgroundImage = "url('backgrounds/cherry.jpeg')";
            break;
        case "fb":
            document.body.style.backgroundImage = "url('backgrounds/boy_1.jpg')";
            break;
        case "igor":
            document.body.style.backgroundImage = "url('backgrounds/igor5.jpg')";
            break;
        case "estate":
            document.body.style.backgroundImage = "url('backgrounds/sale_1.png')";
            break;
        case "chroma":
            document.body.style.backgroundImage = "url('backgrounds/chromakopia.jpg')";
            break;
        case "golf":
            document.body.style.backgroundImage = "url('backgrounds/golf2.jpg')";
            break;
    }

}


function changeSnare() {
    const selectElement = document.getElementById("snare");
    const selectedValue = selectElement.value;

    // Change background color based on the selected value
    switch (selectedValue) {
        case "911":
            break;
        case "igor":
            break;
    }
    selectElement.selectedIndex = 0;
}
function musicFB(){
   const audio = document.getElementById("music").src = "music/seeYouAgain.mp3";
   audio.play();
}
function musicIgor(){
    const audio = document.getElementById("music").src = "music/Bass (IGOR'S THEME).wav";
    audio.play();
 }
 function musicTree(){
    const audio = document.getElementById("music").src = "music/treehouse.mp3";
    audio.play();
 }


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


//button drop down for each instrument, swap background music
//change font/box color per style/album
//fix keydown to avoid holding down button