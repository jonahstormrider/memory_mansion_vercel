// Create placeholder textures for development
// These would be replaced with actual textures in a full implementation

// Create a simple dust particle texture
const canvas1 = document.createElement('canvas');
canvas1.width = 32;
canvas1.height = 32;
const ctx1 = canvas1.getContext('2d');
ctx1.fillStyle = '#ffffff';
ctx1.beginPath();
ctx1.arc(16, 16, 8, 0, Math.PI * 2);
ctx1.fill();
ctx1.globalAlpha = 0.5;
ctx1.filter = 'blur(4px)';
ctx1.beginPath();
ctx1.arc(16, 16, 12, 0, Math.PI * 2);
ctx1.fill();

// Create a memory fragment texture
const canvas2 = document.createElement('canvas');
canvas2.width = 64;
canvas2.height = 64;
const ctx2 = canvas2.getContext('2d');
ctx2.fillStyle = '#00ffff';
ctx2.beginPath();
ctx2.moveTo(32, 10);
ctx2.lineTo(54, 32);
ctx2.lineTo(32, 54);
ctx2.lineTo(10, 32);
ctx2.closePath();
ctx2.fill();
ctx2.globalAlpha = 0.7;
ctx2.filter = 'blur(8px)';
ctx2.beginPath();
ctx2.arc(32, 32, 20, 0, Math.PI * 2);
ctx2.fill();

// Create a codex page texture
const canvas3 = document.createElement('canvas');
canvas3.width = 256;
canvas3.height = 356;
const ctx3 = canvas3.getContext('2d');
ctx3.fillStyle = '#f5f0e0';
ctx3.fillRect(0, 0, 256, 356);
ctx3.strokeStyle = '#8b4513';
ctx3.lineWidth = 4;
ctx3.strokeRect(10, 10, 236, 336);
ctx3.fillStyle = '#8b4513';
ctx3.font = '16px serif';
ctx3.fillText('Investment Wisdom', 60, 40);
ctx3.font = '12px serif';
for (let i = 0; i < 10; i++) {
  ctx3.fillText('Lorem ipsum dolor sit amet...', 20, 70 + i * 20);
}
ctx3.fillStyle = '#d4af37';
ctx3.beginPath();
ctx3.arc(128, 300, 30, 0, Math.PI * 2);
ctx3.fill();

// Export the canvases as data URLs
const dustParticleTexture = canvas1.toDataURL();
const memoryFragmentTexture = canvas2.toDataURL();
const codexPageTexture = canvas3.toDataURL();

// Use these textures in your application
// Example:
// const texture1 = new THREE.TextureLoader().load(dustParticleTexture);
// const texture2 = new THREE.TextureLoader().load(memoryFragmentTexture);
// const texture3 = new THREE.TextureLoader().load(codexPageTexture);
