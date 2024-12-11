let currentQuestion = 0;
let score = 0;
let currentImageType = '';
const totalQuestions = 10;
let allUsedImages = new Set();

function loadNextQuestion() {
  if (currentQuestion >= totalQuestions) {
    endGame();
    return;
  }

  const allImages = {
    real: images.real.filter(img => !allUsedImages.has(img)),
    ai: images.ai.filter(img => !allUsedImages.has(img))
  };

  const realAvailable = allImages.real.length > 0;
  const aiAvailable = allImages.ai.length > 0;

  if (!realAvailable && !aiAvailable) {
    console.error('No more unused images available');
    endGame();
    return;
  }

  if (!aiAvailable) {
    currentImageType = 'real';
  } else if (!realAvailable) {
    currentImageType = 'ai';
  } else {
    currentImageType = Math.random() < 0.5 ? 'ai' : 'real';
  }

  const availableImages = allImages[currentImageType];
  const randomIndex = Math.floor(Math.random() * availableImages.length);
  const selectedImage = availableImages[randomIndex];
  
  allUsedImages.add(selectedImage);
  
  const img = document.getElementById('game-image');
  img.onerror = function() {
    console.error(`Failed to load image: ${selectedImage}`);
    allUsedImages.delete(selectedImage);
    loadNextQuestion();
  };
  
  img.src = selectedImage;
  document.getElementById('progress').textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
  document.getElementById('feedback').textContent = '';
}

function initGame() {
  currentQuestion = 0;
  score = 0;
  allUsedImages.clear();
  loadNextQuestion();
} 