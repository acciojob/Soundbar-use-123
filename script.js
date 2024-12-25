//your JS code here. If required.
// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all buttons and add click event listeners
    const buttons = document.querySelectorAll('.btn');
    const stopButton = document.querySelector('.stop');
    let currentAudio = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const soundId = this.getAttribute('data-sound');
            playSound(soundId);
        });
    });

    stopButton.addEventListener('click', stopSound);

    function playSound(soundId) {
        // Stop any currently playing sound
        stopSound();
        
        // Get and play the new sound
        const audio = document.getElementById(soundId);
        if (audio) {
            audio.currentTime = 0;  // Reset the audio to start
            audio.play();
            currentAudio = audio;
        }
    }

    function stopSound() {
        // Stop all audio elements
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        currentAudio = null;
    }
});