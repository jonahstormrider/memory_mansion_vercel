// Simple placeholder sound effects for the memory mansion
// These would be replaced with actual audio files in a full implementation

// Function to generate a simple tone
function generateTone(frequency, duration, volume = 1.0, type = 'sine') {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = type;
        oscillator.frequency.value = frequency;
        gainNode.gain.value = volume;
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        
        // Fade out
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
        
        // Stop after duration
        setTimeout(() => {
            oscillator.stop();
        }, duration * 1000);
        
        return audioContext;
    } catch (e) {
        console.warn('Audio context could not be created:', e);
        return null;
    }
}

// Dialogue open sound
function playDialogueOpenSound() {
    return generateTone(440, 0.3, 0.2, 'sine');
}

// Dialogue close sound
function playDialogueCloseSound() {
    return generateTone(330, 0.2, 0.2, 'sine');
}

// Eagle vision activation sound
function playEagleVisionSound() {
    const ctx = generateTone(880, 1.0, 0.1, 'sine');
    setTimeout(() => generateTone(1320, 0.5, 0.1, 'sine'), 200);
    return ctx;
}

// Synchronization point sound
function playSynchronizationSound() {
    const ctx = generateTone(523.25, 0.2, 0.2, 'sine'); // C5
    setTimeout(() => generateTone(659.25, 0.2, 0.2, 'sine'), 200); // E5
    setTimeout(() => generateTone(783.99, 0.4, 0.2, 'sine'), 400); // G5
    return ctx;
}

// Object interaction sound
function playInteractionSound() {
    return generateTone(660, 0.1, 0.1, 'sine');
}

// Ambient background loop
function playAmbientLoop() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator1 = audioContext.createOscillator();
        const oscillator2 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator1.type = 'sine';
        oscillator1.frequency.value = 55; // A1
        
        oscillator2.type = 'sine';
        oscillator2.frequency.value = 110; // A2
        
        gainNode.gain.value = 0.03; // Very quiet
        
        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator1.start();
        oscillator2.start();
        
        // Slowly modulate the frequency for an eerie effect
        const interval = setInterval(() => {
            oscillator1.frequency.value = 55 + Math.sin(Date.now() * 0.001) * 5;
            oscillator2.frequency.value = 110 + Math.sin(Date.now() * 0.0005) * 10;
        }, 50);
        
        // Add a method to stop the sound
        audioContext.stopSound = function() {
            clearInterval(interval);
            oscillator1.stop();
            oscillator2.stop();
        };
        
        return audioContext;
    } catch (e) {
        console.warn('Audio context could not be created:', e);
        return null;
    }
}

// Export sound functions
window.soundEffects = {
    playDialogueOpenSound,
    playDialogueCloseSound,
    playEagleVisionSound,
    playSynchronizationSound,
    playInteractionSound,
    playAmbientLoop
};
