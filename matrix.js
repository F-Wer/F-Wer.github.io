function matrix() {
  togglematrix();
}

function togglematrix() {
  hideelements();
  var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d");

  // Setting the width and height of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Setting up the letters
  var letters =
    "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
  letters = letters.split("");

  // Setting up the columns
  var fontSize = 10,
    columns = canvas.width / fontSize;

  // Setting up the drops
  var drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // Setting up the draw function
  function draw(i) {
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = "#0f0";
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  }

  // Loop the animation
  var interval = setInterval(draw, 33);
  document.addEventListener("keydown", (event) => {
    if (event.isComposing || event.code == "Space") {
      if (
        window.fullScreen ||
        (window.innerWidth == screen.width &&
          window.innerHeight == screen.height)
      ) {
        //toggleFullScreen();
      } else {
        resetelements(interval);
        showelements();
      }
    }
  });
}

function resetelements(interval) {
  var canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clearInterval(interval);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var i;
  var obj = document.querySelectorAll("body *"),
    i;
  for (i = 0; i < obj.length; i++) {
    obj[i].style.color = "";
  }
}
document.addEventListener("keydown", (event) => {
  if (event.isComposing || event.code == "KeyM") {
    matrix();
  }
});
