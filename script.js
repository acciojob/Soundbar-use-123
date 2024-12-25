//your JS code here. If required.
// script.js
const sounds = [
    { id: 'sound1', src: 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3' },
    { id: 'sound2', src: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3' },
    { id: 'sound3', src: 'http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg' },
    { id: 'sound4', src: 'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Crumble%20Sound.mp3' },
    { id: 'sound5', src: 'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3' },
    { id: 'sound6', src: 'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3' }
];
 
// Function to stop all sounds
function stopAllSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound.id);
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}
 
// Create audio elements for each sound dynamically
sounds.forEach(sound => {
    const audio = document.createElement('audio');
    audio.id = sound.id;
    audio.src = sound.src;
    document.body.appendChild(audio);
});
 
// Play sound on button click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        stopAllSounds();
        const soundId = button.getAttribute('data-sound');
        document.getElementById(soundId).play();
    });
});
 
// Stop button functionality
document.querySelector('.stop').addEventListener('click', () => {
    stopAllSounds();
});