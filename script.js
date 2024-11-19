let bgMusic = document.getElementById("music");
bgMusic.volume = 0.7;
let bg = document.body.style.backgroundImage;
const pressedKeys = {};

const selectElement = document.querySelector('select');
let dropDown = false;

//plays sound based on key
function playSound(e){
    const keyCode = e.keyCode;
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        if(!audio) return;
        
        if(!pressedKeys[keyCode]){
            pressedKeys[keyCode] = true;
            audio.currentTime = 0;
        audio.play();
        key.classList.add('playing'); 
        }
}


function removeTransition(e){
    const keyCode = e.keyCode;
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!key) return;
    key.classList.remove('playing');
    pressedKeys[keyCode] = false;
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
// Change background and coloring based on the selected value
function changeBG(button){
    const x = document.querySelectorAll(".sound");
    switch (button.id){
        case "wolf":
            document.body.style.backgroundImage = "url('backgrounds/wolf.jpg')";
            x.forEach(x => {
                x.style.color = "#ffc600";
            })
          
            break;
        case "cherry":
            document.body.style.backgroundImage = "url('backgrounds/cherry.jpeg')";
            x.forEach(x => {
                x.style.color = "#ffc600";
            })
            break;
        case "fb":
            document.body.style.backgroundImage = "url('backgrounds/boy_1.jpg')";
            x.forEach(x => {
                x.style.color = "#ffc600";
            })
        
            break;
        case "igor":
            document.body.style.backgroundImage = "url('backgrounds/igor5.jpg')";
            x.forEach(x => {
                x.style.color = "pink";
            })
            break;
        case "estate":
            document.body.style.backgroundImage = "url('backgrounds/sale_1.png')";
            x.forEach(x => {
                x.style.color = "#A9CCE3";
            })
            break;
        case "chroma":
            document.body.style.backgroundImage = "url('backgrounds/chromakopia.jpg')";
            x.forEach(x => {
                x.style.color = "#00B140";
            })
            break;
        case "golf":
            document.body.style.backgroundImage = "url('backgrounds/golf2.jpg')";
            x.forEach(x => {
                x.style.color = "#ffc600";
            })
            break;
    }

}

// Changes background music based on user selection
function changeMusic() {
    const selectElement = document.getElementById("song");
    const selectedValue = selectElement.value;
    const currSong = document.getElementById("music");

    switch (selectedValue) {
        case "tree":
            currSong.src = "music/treehouse.mp3";
            break;
        case "igor":
            currSong.src = "music/Bass (IGOR'S THEME).wav";
            break;
        case "see":
            currSong.src = "music/seeYouAgain.mp3";
            break;
        case "side":
            currSong.src = "music/sideStreet.mp3";
            break;
        case "she":
            currSong.src = "music/she.mp3";
            break;
        case "ing":
            currSong.src = "music/ing.mp3";
            break;
    }
    selectElement.selectedIndex = 0;
}

//changes sample sound for the snare drum based on selected option
function changeSnare() {
    const selectElement = document.getElementById("snare");
    const selectedValue = selectElement.value;
    const s = document.getElementById("snareSound");
    // Change background color based on the selected value
    switch (selectedValue) {
        case "answer":
            s.src = "music/snare/answerSnare.wav";
            break;
        case "911":
            s.src ="music/snare/911.wav";
            break;
        case "igor":
            s.src = "music/snare/igor.wav";
            break;
        case "earf":
            s.src = "music/snare/earf.wav";
            break;
        case "garden":
            s.src = "music/snare/garden.wav";
            break;
        case "jugger":
            s.src = "music/snare/Snare 2 JUGGERNAUT.mp3";
            break;
        case "she":
            s.src = "music/snare/Snare (SHE).wav";
            break;
        case "gone":
            s.src = "music/snare/GONE, GONE Snare.wav";
            break;

    }
    selectElement.selectedIndex = 0;
}


document.addEventListener('keydown', playSound);

document.addEventListener('keyup', removeTransition);
    

//button drop down for each instrument
//change font/box color per style/album, add to commits
//fix keydown to avoid holding down button, add to commits