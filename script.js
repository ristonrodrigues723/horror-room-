

let redirectTimeout;

        function textChange() {
            const text1 = document.getElementById('halloween-text1');
            const text2 = document.getElementById('halloween-text2');
            const text3 = document.getElementById('halloween-text3');
            
            if(text1) {
                text1.innerHTML = "YOU";
                text1.classList.add('changed');
            }
            if(text2) {
                text2.innerHTML = "ARE GONNA";
                text2.classList.add('changed');
            }
            if(text3) {
                text3.innerHTML = "DIE!!";
                text3.classList.add('changed');
            }

            clearTimeout(redirectTimeout);
            redirectTimeout = setTimeout(() => {
                window.location.href = 'https://manor.hackclub.com/';
            }, 30000);
        }

        function boo() {
            const text1 = document.getElementById('halloween-text1');
            const text2 = document.getElementById('halloween-text2');
            const text3 = document.getElementById('halloween-text3');
            
            if(text1) {
                text1.innerHTML = 'DEAD';
                text1.classList.remove('changed');
            }
            if(text2) {
                text2.innerHTML = 'I SEE';
                text2.classList.remove('changed');
            }
            if(text3) {
                text3.innerHTML = 'PEOPLE';
                text3.classList.remove('changed');
            }

            clearTimeout(redirectTimeout);
        }


        // Array of image paths
        const photos = [
          'images/f1.png',
          'images/ur2zo892.png',
          'images/f3.png'
      ];

      let currentIndex = 0;
      const framePhoto = document.getElementById('frame-photo');

      // Function to change photos every 5 seconds
      function changePhoto() {
          currentIndex = (currentIndex + 1) % photos.length;
          framePhoto.style.opacity = 0; // Fade out

          setTimeout(() => {
              framePhoto.src = photos[currentIndex]; // Change the image
              framePhoto.style.opacity = 1; // Fade in
          }, 1000); // Wait for 1s to change image
      }

      setInterval(changePhoto, 5000); // Change every 5 seconds

      function drawTrapezium(canvasId, isLeft) {
          var canvas = document.getElementById(canvasId);
          var ctx = canvas.getContext("2d");

          var canvasHeight = canvas.height;
          var canvasWidth = canvas.width;

          ctx.beginPath();
          if (isLeft) {
              ctx.moveTo(canvasWidth * 0.75, canvasHeight * 0.25);  // Top right
              ctx.lineTo(canvasWidth * 0.75, canvasHeight * 0.75);  // Bottom right
              ctx.lineTo(0, canvasHeight * 0.9);                    // Bottom left
              ctx.lineTo(0, canvasHeight * 0.1);                    // Top left
          } else {
              ctx.moveTo(0, canvasHeight * 0.25);                   // Top left
              ctx.lineTo(0, canvasHeight * 0.75);                   // Bottom left
              ctx.lineTo(canvasWidth * 0.75, canvasHeight * 0.9);   // Bottom right
              ctx.lineTo(canvasWidth * 0.75, canvasHeight * 0.1);   // Top right
          }
          ctx.closePath();

          ctx.fillStyle = "black";
          ctx.fill();
      }

      // Draw left trapezium
      drawTrapezium("leftTrapezium", true);

      // Draw right trapezium
      drawTrapezium("rightTrapezium", false);

      const windowImage = document.getElementById('window-image');
const normalImage = 'images/Designer.png';
const hoverImage = 'images/f3.png';

windowImage.addEventListener('mouseenter', () => {
  windowImage.src = hoverImage;
});

windowImage.addEventListener('mouseleave', () => {
  windowImage.src = normalImage;
});



//WATCH FOR THE CLICK OF THE BUTTON
const bookContainer = document.querySelector(".book-container");
bookContainer.addEventListener('click', getBlood);
bookContainer.addEventListener('mouseenter', getBlood);

// VARIABLE TO MAKE POSSIBLE NOT REPEATING THE BLOOD SPLASHES
let splashesUsed = [];

//FUNCTION TO CHOSE A RANDOM BLOOD SPLASH THAT HAVEN'T BEEN DISPLAYED BEFORE
function getBlood() {
    if (splashesUsed.length == 3) {
        splashesUsed.shift();
        splashesUsed.shift();
    }

    let randomNumber = Math.floor(Math.random() * 3);

    while (splashesUsed.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 3);
    }

    let chosenNumber = randomNumber;

    if (chosenNumber === 0) {
        Blood1();
    } else if (chosenNumber === 1) {
        Blood2();
    } else if (chosenNumber === 2) {
        Blood3();
    }

    splashesUsed.push(chosenNumber);
    console.log(splashesUsed);
}

//GETTING THE SPLASH OF BLOOD 1
function Blood1() {
    document.getElementById("splash-1-fade").beginElement();
    document.getElementById("splash-1a-drip").beginElement();
    document.getElementById("splash-1b-drip").beginElement();
}

//GETTING THE SPLASH OF BLOOD 2
function Blood2() {
    document.getElementById("splash-2-fade").beginElement();
    document.getElementById("splash-2-drip").beginElement();
}

//GETTING THE SPLASH OF BLOOD 3
function Blood3() {
    document.getElementById("splash-3-fade").beginElement();
    document.getElementById("splash-3-drip").beginElement();
}





var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  if (element.classList.contains("doorOpen")) {
    // If the door is open, remove the "doorOpen" class to close it
    element.classList.remove("doorOpen");
  } else {
    // Otherwise, add the "doorOpen" class to open the door
    element.classList.add("doorOpen");
  }
}

var audio = new Audio('http://soundbible.com/mp3/Female_Scream_Horror-NeoPhyTe-138499973.mp3');
var skullImage = new Image();
skullImage.src = 'https://s-media-cache-ak0.pinimg.com/236x/b1/8a/30/b18a30fff5579066ad989bed52fdd51a.jpg';

var door = document.querySelector('.door');
var isAnimating = false;

function onDoorClick() {
    if (isAnimating) return;
    isAnimating = true;

    this.classList.remove('doorClosed');
    this.classList.add('doorOpen');
    
    setTimeout(function() {
        document.querySelector('.black-screen').style.display = 'block';
        document.querySelector('.black-screen').classList.add('show');
        
        setTimeout(function() {
            document.querySelector('.skull').classList.add('show', 'shake');
            document.querySelector('.overlay').style.display = 'block';
            audio.play();
            
            setTimeout(resetAnimation, 2000); // Reset after 2 seconds
        }, 1000);
    }, 500); // Delay to allow door opening animation
}

function resetAnimation() {
    document.querySelector('.black-screen').classList.remove('show');
    document.querySelector('.skull').classList.remove('show', 'shake');
    document.querySelector('.overlay').style.display = 'none';
    door.classList.remove('doorOpen');
    door.classList.add('doorClosed');
    
    setTimeout(function() {
        document.querySelector('.black-screen').style.display = 'none';
        document.querySelector('.skull').style.display = 'none';
        isAnimating = false; // Allow the animation to be triggered again
    }, 500); // Delay to allow fade-out
}

door.addEventListener('click', onDoorClick);


const backgroundMusic = new Audio('audio/horror-background-atmosphere-11-240870.mp3');
const bookSound = new Audio('audio/knife-stab-melon-82560.mp3');
const pumpkinSound = new Audio('audio/1157539.audio-Witch_Cauldron_-A_Young_Witch_Maddening_Her_Opponent_With_Her_Laughters-Getting_In_Their_Minds.wav');
const windowSound = new Audio('audio/scream-90747.mp3');
const photoFrameSound = new Audio('audio/scream-90747.mp3');

// Function to play background music
function playBackgroundMusic() {
    backgroundMusic.loop = true;
    backgroundMusic.play();
}

// Event listener for any button click to start background music
document.addEventListener('click', function() {
    playBackgroundMusic();
}, { once: true });

// Book container interactions

bookContainer.addEventListener('mouseenter', function() {
    bookSound.play();
    getBlood();
});

let pumpkinRedirectTimeout; // Timeout variable for the pumpkin hover redirect

// Pumpkin interactions
const pumpkin = document.querySelector(".calabaza");

pumpkin.addEventListener('mouseenter', function() {
    pumpkinSound.play();

    // Start a 5-second timer to redirect when the pumpkin is hovered over
    pumpkinRedirectTimeout = setTimeout(() => {
        window.location.href = 'https://manor.hackclub.com/';
    }, 2000); // Redirect after 5 seconds
});

pumpkin.addEventListener('mouseleave', function() {
    // Clear the timeout if the user leaves the pumpkin before 5 seconds
    clearTimeout(pumpkinRedirectTimeout);
});


// Window interactions
const windowElement = document.querySelector(".window");
windowElement.addEventListener('click', function() {
    windowSound.play();
});
windowElement.addEventListener('mouseenter', function() {
    windowSound.play();
});

// Photo frame interactions
const photoFrame = document.querySelector(".photo-frame");
photoFrame.addEventListener('click', function() {
    photoFrameSound.play();
});
photoFrame.addEventListener('mouseenter', function() {
    photoFrameSound.play();
});
