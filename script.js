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
    // 真实图片
    { src: "real pictures/6.jpg", type: "real" },
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
    { src: "real pictures/preview.gif", type: "real" }
];
  
  let currentImageIndex = 0;
  let score = 0;
  const GAME_ROUNDS = 10; // 设置游戏回合数
  let currentRound = 0;
  
  function loadRandomImage() {
    const gameImage = document.getElementById("game-image");
    currentImageIndex = Math.floor(Math.random() * images.length);
    
    // 添加加载状态
    gameImage.style.opacity = "0.5";
    document.getElementById("feedback").textContent = "Loading...";
    
    // 添加图片加载错误处理
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
    
    // 禁用按钮防止重复点击
    buttons.forEach(btn => btn.disabled = true);
    
    if (selectedType === correctType) {
        score++;
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = `Wrong! It was ${correctType}`;
    }
    
    document.getElementById("score").textContent = `Score: ${score}`;
    currentRound++;
    
    if (currentRound >= GAME_ROUNDS) {
        // 游戏结束
        setTimeout(() => {
            const playAgain = confirm(`Game Over! Your final score is ${score}/${GAME_ROUNDS}. Play again?`);
            if (playAgain) {
                resetGame();
            }
        }, 1000);
    } else {
        // 继续游戏
        setTimeout(() => {
            buttons.forEach(btn => btn.disabled = false);
            loadRandomImage();
        }, 1000);
    }
  }
  
  function resetGame() {
    score = 0;
    currentRound = 0;
    document.getElementById("score").textContent = "Score: 0";
    loadRandomImage();
  }
  
  // Initialize game
  loadRandomImage();
  