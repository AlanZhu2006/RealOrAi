const images = [
    // AI生成的图片
    { src: "fake pictures/DM_20241210225336_001.webp", type: "ai" },
    { src: "fake pictures/image.png", type: "ai" },
    { src: "fake pictures/DM_20241210225336_002.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_003.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_004.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_005.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_006.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_007.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_008.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_009.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_010.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_011.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_012.webp", type: "ai" },
    { src: "fake pictures/DM_20241210225336_013.jpg", type: "ai" },
    { src: "fake pictures/image copy.png", type: "ai" },
    { src: "fake pictures/image copy 2.png", type: "ai" },
    { src: "fake pictures/image copy 3.png", type: "ai" },
    { src: "fake pictures/image copy 4.png", type: "ai" },
    { src: "fake pictures/image copy 5.png", type: "ai" },
    { src: "fake pictures/image copy 6.png", type: "ai" },
    { src: "fake pictures/image copy 7.png", type: "ai" },
    { src: "fake pictures/image copy 8.png", type: "ai" },
    { src: "fake pictures/image copy 9.png", type: "ai" },
    { src: "fake pictures/image copy 10.png", type: "ai" },
    { src: "fake pictures/image copy 11.png", type: "ai" },
    { src: "fake pictures/image copy 12.png", type: "ai" },
    { src: "fake pictures/image copy 13.png", type: "ai" },
    { src: "fake pictures/image copy 14.png", type: "ai" },
    { src: "fake pictures/image copy 15.png", type: "ai" },
    { src: "fake pictures/image copy 16.png", type: "ai" },
    { src: "fake pictures/image copy 17.png", type: "ai" },
    { src: "fake pictures/image copy 18.png", type: "ai" },
    { src: "fake pictures/image copy 19.png", type: "ai" },
    { src: "fake pictures/image copy 20.png", type: "ai" },
    { src: "fake pictures/image copy 21.png", type: "ai" },
    { src: "fake pictures/image copy 22.png", type: "ai" },
    { src: "fake pictures/image copy 23.png", type: "ai" },
    { src: "fake pictures/image copy 24.png", type: "ai" },
    { src: "fake pictures/image copy 25.png", type: "ai" }, 
    { src: "fake pictures/image copy 26.png", type: "ai" },
    { src: "fake pictures/image copy 27.png", type: "ai" },
    { src: "fake pictures/image copy 28.png", type: "ai" },
    { src: "fake pictures/image copy 29.png", type: "ai" },
    { src: "fake pictures/image copy 30.png", type: "ai" },
    { src: "fake pictures/image copy 31.png", type: "ai" },
    
    

    // 真实图片
    { src: "real pictures/image copy 2.png", type: "real" },
    { src: "real pictures/image copy 3.png", type: "real" },
    { src: "real pictures/image copy 4.png", type: "real" },
    { src: "real pictures/23.jpg", type: "real" },
    { src: "real pictures/30.jpg", type: "real" },
    { src: "real pictures/35.jpg", type: "real" },
    { src: "real pictures/40.jpg", type: "real" },
    { src: "real pictures/41.jpg", type: "real" },
    { src: "real pictures/50.jpg", type: "real" },
    { src: "real pictures/95.jpg", type: "real" },
    { src: "real pictures/98.jpg", type: "real" },
    { src: "real pictures/image.png", type: "real" },
    { src: "real pictures/pexels-abby-chung-1191377.jpg", type: "real" },
    { src: "real pictures/pexels-aleksandar-pasaric-325185.jpg", type: "real" },
    { src: "real pictures/pexels-asad-photo-maldives-3601425.jpg", type: "real" },
    { src: "real pictures/pexels-daan-stevens-939328.jpg", type: "real" },
    { src: "real pictures/pexels-evgeny-tchebotarev-4101555.jpg", type: "real" },
    { src: "real pictures/pexels-fede-roveda-4179480.jpg", type: "real" },
    { src: "real pictures/pexels-fotografierende-1111597.jpg", type: "real" },
    { src: "real pictures/pexels-frans-van-heerden-632522.jpg", type: "real" },
    { src: "real pictures/pexels-freestocksorg-370014.jpg", type: "real" },
    { src: "real pictures/pexels-garon-piceli-852793.jpg", type: "real" },
    { src: "real pictures/pexels-george-desipris-760984.jpg", type: "real" },
    { src: "real pictures/pexels-harrison-candlin-2441454.jpg", type: "real" },
    { src: "real pictures/pexels-jeshootscom-834894.jpg", type: "real" },
    { src: "real pictures/pexels-jill-wellington-35545.jpg", type: "real" },
    { src: "real pictures/pexels-josh-sorenson-976863.jpg", type: "real" },
    { src: "real pictures/pexels-khaled-reese-702139.jpg", type: "real" },
    { src: "real pictures/pexels-lecreusois-240561.jpg", type: "real" },
    { src: "real pictures/pexels-lisa-1292862.jpg", type: "real" },
    { src: "real pictures/pexels-marcin-dampc-1684187.jpg", type: "real" },
    { src: "real pictures/pexels-marctutorials-1152359.jpg", type: "real" },
    { src: "real pictures/pexels-matheus-bertelli-573238.jpg", type: "real" },
    { src: "real pictures/pexels-maurício-mascaro-712786.jpg", type: "real" },
    { src: "real pictures/pexels-mike-chai-842339.jpg", type: "real" },
    { src: "real pictures/pexels-min-an-1087735.jpg", type: "real" },
    { src: "real pictures/pexels-nice-guys-767239.jpg", type: "real" },
    { src: "real pictures/pexels-nitin-dhumal-46710.jpg", type: "real" },
    { src: "real pictures/pexels-nout-gons-378570.jpg", type: "real" },
    { src: "real pictures/pexels-nubia-navarro-(nubikini)-386000.jpg", type: "real" },
    { src: "real pictures/pexels-peter-fazekas-1170572.jpg", type: "real" },
    { src: "real pictures/pexels-peter-fazekas-1170594.jpg", type: "real" },
    { src: "real pictures/pexels-picjumbocom-196652.jpg", type: "real" },
    { src: "real pictures/pexels-pineapple-supply-co-137132.jpg", type: "real" },
    { src: "real pictures/pexels-pixabay-34291.jpg", type: "real" },
    { src: "real pictures/pexels-pixabay-210158.jpg", type: "real" },
    { src: "real pictures/pexels-pixabay-236171.jpg", type: "real" },
    { src: "real pictures/pexels-pixabay-262347.jpg", type: "real" },
    { src: "real pictures/pexels-pok-rie-5365875.jpg", type: "real" },
    { src: "real pictures/pexels-s-migaj-747964.jpg", type: "real" },
    { src: "real pictures/pexels-sam-kolder-2387873.jpg", type: "real" },
    { src: "real pictures/pexels-scott-webb-136412.jpg", type: "real" },
    { src: "real pictures/pexels-snapwire-227675.jpg", type: "real" },
    { src: "real pictures/pexels-victor-freitas-772665.jpg", type: "real" },
    { src: "real pictures/pexels-ylanite-koppens-1209610.jpg", type: "real" },
];
  
  let currentImageIndex = 0;
  let score = 0;
  let currentRound = 0;
  const TOTAL_ROUNDS = 10;
  let wrongAnswers = []; // 记录错误的题目
  
  function loadRandomImage() {
    const gameImage = document.getElementById("game-image");
    const progressText = document.getElementById("progress");
    currentImageIndex = Math.floor(Math.random() * images.length);
    
    // 更新进度
    progressText.textContent = `Question ${currentRound + 1} of ${TOTAL_ROUNDS}`;
    
    gameImage.style.opacity = "0.5";
    document.getElementById("feedback").textContent = "Loading...";
    
    gameImage.onerror = function() {
        document.getElementById("feedback").textContent = "Error loading image!";
        gameImage.style.opacity = "1";
    };
    
    gameImage.onload = function() {
        gameImage.style.opacity = "1";
        document.getElementById("feedback").textContent = "";
    };
    
    gameImage.src = images[currentImageIndex].src;
  }
  
  function checkAnswer(selectedType) {
    const correctType = images[currentImageIndex].type;
    const buttons = document.querySelectorAll('button');
    const feedback = document.getElementById("feedback");
    
    buttons.forEach(btn => btn.disabled = true);
    feedback.classList.remove('correct', 'wrong');
    
    if (selectedType === correctType) {
        score++;
        feedback.textContent = "Correct! ✨";
        feedback.classList.add('correct');
    } else {
        feedback.textContent = `Wrong! It was ${correctType} 😅`;
        feedback.classList.add('wrong');
        // 记录错误的题目
        wrongAnswers.push({
            image: images[currentImageIndex].src,
            selected: selectedType,
            correct: correctType
        });
    }
    
    feedback.style.animation = 'pulse 0.5s ease';
    setTimeout(() => feedback.style.animation = '', 500);
    
    updateScore();
    currentRound++;
    
    if (currentRound >= TOTAL_ROUNDS) {
        showGameSummary();
    } else {
        setTimeout(() => {
            buttons.forEach(btn => btn.disabled = false);
            loadRandomImage();
        }, 1000);
    }
  }
  
  function updateScore() {
    const scoreElement = document.getElementById("score");
    const accuracy = (score / (currentRound + 1) * 100).toFixed(1);
    scoreElement.textContent = `Score: ${score}/${currentRound + 1} (${accuracy}%)`;
  }
  
  function showGameSummary() {
    const accuracy = (score / TOTAL_ROUNDS * 100).toFixed(1);
    const gameContainer = document.querySelector('.game-container');
    
    // 创建总结界面
    const summaryHTML = `
        <div class="summary">
            <h2>Game Over!</h2>
            <p class="final-score">Final Score: ${score}/${TOTAL_ROUNDS}</p>
            <p class="accuracy">Accuracy: ${accuracy}%</p>
            <p class="wrong-count">Wrong Answers: ${wrongAnswers.length}</p>
            <div class="summary-buttons">
                <button onclick="resetGame()" class="restart-btn">Play Again</button>
                <button onclick="showWrongAnswers()" class="review-btn">Review Mistakes</button>
            </div>
        </div>
    `;
    
    gameContainer.innerHTML = summaryHTML;
  }
  
  function showWrongAnswers() {
    const gameContainer = document.querySelector('.game-container');
    let wrongAnswersHTML = `
        <div class="wrong-answers">
            <h2>Your Mistakes</h2>
            <div class="mistakes-list">
                ${wrongAnswers.map((wrong, index) => `
                    <div class="mistake-item">
                        <p>Question ${index + 1}</p>
                        <img src="${wrong.image}" alt="Question image">
                        <p>You selected: ${wrong.selected}</p>
                        <p>Correct answer: ${wrong.correct}</p>
                    </div>
                `).join('')}
            </div>
            <button onclick="resetGame()" class="restart-btn">Play Again</button>
        </div>
    `;
    
    gameContainer.innerHTML = wrongAnswersHTML;
  }
  
  function resetGame() {
    score = 0;
    currentRound = 0;
    wrongAnswers = [];
    
    // 重置游戏界面
    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = `
        <h1>AI or Real Picture?</h1>
        <div id="progress">Question 1 of ${TOTAL_ROUNDS}</div>
        <div class="image-container">
            <img id="game-image" src="" alt="Game Image">
        </div>
        <div class="buttons">
            <button onclick="checkAnswer('ai')">AI Generated</button>
            <button onclick="checkAnswer('real')">Real Picture</button>
        </div>
        <div class="feedback" id="feedback"></div>
        <div class="score" id="score">Score: 0/0 (0%)</div>
    `;
    
    loadRandomImage();
  }
  
  // 初始化游戏
  window.onload = function() {
    resetGame();
  };
  