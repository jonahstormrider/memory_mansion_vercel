/* Ensure placeholder textures are available */
// Create a canvas element to generate textures
const canvas = document.createElement('canvas');
canvas.width = 64;
canvas.height = 64;
const ctx = canvas.getContext('2d');

// Generate dust particle texture
function generateDustTexture() {
  ctx.clearRect(0, 0, 64, 64);
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(32, 32, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 0.5;
  ctx.filter = 'blur(4px)';
  ctx.beginPath();
  ctx.arc(32, 32, 24, 0, Math.PI * 2);
  ctx.fill();
  
  return canvas.toDataURL();
}

// Generate memory fragment texture
function generateMemoryFragmentTexture() {
  ctx.clearRect(0, 0, 64, 64);
  ctx.globalAlpha = 1.0;
  ctx.filter = 'none';
  ctx.fillStyle = '#00ffff';
  ctx.beginPath();
  ctx.moveTo(32, 10);
  ctx.lineTo(54, 32);
  ctx.lineTo(32, 54);
  ctx.lineTo(10, 32);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 0.7;
  ctx.filter = 'blur(8px)';
  ctx.beginPath();
  ctx.arc(32, 32, 20, 0, Math.PI * 2);
  ctx.fill();
  
  return canvas.toDataURL();
}

// Generate codex page texture
function generateCodexTexture() {
  canvas.width = 256;
  canvas.height = 356;
  ctx.clearRect(0, 0, 256, 356);
  ctx.globalAlpha = 1.0;
  ctx.filter = 'none';
  ctx.fillStyle = '#f5f0e0';
  ctx.fillRect(0, 0, 256, 356);
  ctx.strokeStyle = '#8b4513';
  ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, 236, 336);
  ctx.fillStyle = '#8b4513';
  ctx.font = '16px serif';
  ctx.fillText('Investment Wisdom', 60, 40);
  ctx.font = '12px serif';
  for (let i = 0; i < 10; i++) {
    ctx.fillText('Lorem ipsum dolor sit amet...', 20, 70 + i * 20);
  }
  ctx.fillStyle = '#d4af37';
  ctx.beginPath();
  ctx.arc(128, 300, 30, 0, Math.PI * 2);
  ctx.fill();
  
  canvas.width = 64;
  canvas.height = 64;
  return canvas.toDataURL();
}

// Export texture generation functions
window.generateTextures = {
  dust: generateDustTexture,
  memoryFragment: generateMemoryFragmentTexture,
  codex: generateCodexTexture
};
