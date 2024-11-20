let bgMusic = document.getElementById("music");
bgMusic.volume = 0.7;
let bg = document.body.style.backgroundImage;
const pressedKeys = {};

//plays sound based on key and adds visual feeback based on key
function playSound(e){
   
    const isSelectFocused = document.activeElement.tagName === 'SELECT';
    const keyCode = e.keyCode;

    if (isSelectFocused && (keyCode < 65 || keyCode > 90)) { // Only allow A-Z keys (example: keyCode 65-90)
        return;
    }
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

//removes visual feedback
function removeTransition(e){
    const isSelectFocused = document.activeElement.tagName === 'SELECT';
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

// Change background and text coloring based on the selected value
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
        case "tmrw":
            currSong.src = "music/tomrrow.mp3";
            break;
    }
    selectElement.selectedIndex = 0;
}

//changes sample sound for the snare drum based on selected option
function changeSnare() {
    const selectElement = document.getElementById("snare");
    const selectedValue = selectElement.value;
    const s = document.getElementById("snareSound");
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

//changes kick sound based on selected option
function changeKick() {
    const selectElement = document.getElementById("kick");
    const selectedValue = selectElement.value;
    const s = document.getElementById("kickSound");
    switch (selectedValue) {
        case "pigs":
            s.src = "music/kick/Kick (Pigs).wav";
            break;
        case "911":
            s.src ="music/igor/Kick (911).wav";
            break;
        case "okaga":
            s.src = "music/kick/Kick (OKAGA, CA).wav";
            break;
        case "cherry":
            s.src = "music/kick/Cherry Bomb Kick.wav";
            break;
        case "garden":
            s.src = "music/kick/garden shed kick.wav";
            break;
        case "jugger":
            s.src = "music/kick/Kick 2 JUGGERNAUT.mp3";
            break;
        case "boredom":
            s.src = "music/kick/Kick (Boredom).wav";
            break;
        case "gone":
            s.src = "music/kick/GONE, GONE Kick.wav";
            break;
    }
    selectElement.selectedIndex = 0;
}

//changes hihat sound based on selected option
function changeHH() {
    const selectElement = document.getElementById("hihat");
    const selectedValue = selectElement.value;
    const s = document.getElementById("hihatSound");
    switch (selectedValue) {
        case "couch":
            s.src = "music/hats/Closed Hat (Couch).wav";
            break;
        case "earf":
            s.src ="music/hats/EARFQUAKE Closed Hat.wav";
            break;
        case "okaga":
            s.src = "music/hats/Hat (OKAGA, CA).wav";
            break;
        case "park":
            s.src = "music/hats/Hat (Parking Lot).wav";
            break;
        case "ifhy":
            s.src = "music/hats/IFHY Hat.wav";
            break;
        case "rose":
            s.src = "music/hats/Rose Tinted Cheeks Hat.wav";
            break;
        case "sweet":
            s.src = "music/hats/sweet.wav";
            break;
        case "911":
            s.src = "music/igor/Hat (911).wav";
            break;
    }
    selectElement.selectedIndex = 0;
}

//changes fx sound based on selected option
function changeFX() {
    const selectElement = document.getElementById("fx");
    const selectedValue = selectElement.value;
    const s = document.getElementById("fxSound");
    switch (selectedValue) {
        case "tron":
            s.src = "music/fx/Tron Cat Cowbell.wav";
            break;
        case "see":
            s.src ="music/fx/Stomp (See You Again).wav";
            break;
        case "wolf":
            s.src = "music/fx/Wolf Ugh.wav";
            break;
        case "yeah":
            s.src = "music/fx/Awkward Yeah.wav";
            break;
        case "domo":
            s.src = "music/fx/Domo 23 Oh.wav";
            break;
        case "pilot":
            s.src = "music/fx/Cowbell (PILOT).wav";
            break;
        case "earf":
            s.src = "music/fx/EARFQUAKE Riser.wav";
            break;
        case "dance":
            s.src = "music/fx/PERC.wav";
            break;
    }
    selectElement.selectedIndex = 0;
}

function blurSelectAfterChange() {
    const selectElement = document.querySelector('select');
    selectElement.blur(); 
}
function handleSelectFocus() {
    const activeKeys = document.querySelectorAll('.key.playing');
    activeKeys.forEach(key => key.classList.remove('playing'));
    Object.keys(pressedKeys).forEach(keyCode => pressedKeys[keyCode] = false);
}

window.addEventListener('keydown', playSound);

window.addEventListener('keyup', removeTransition);

const selectElements = document.querySelectorAll('select');
selectElements.forEach(select => {
    select.addEventListener('focus', handleSelectFocus);
    select.addEventListener('change', blurSelectAfterChange); 
});

