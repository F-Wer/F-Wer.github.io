function Fullscreen() {
    toggleFullScreen();
}

function hideelements() {
    document.getElementById('Full_Screen').style.display = "none";
    document.getElementById('Instr_text').style.display = "none";
    document.getElementById('Instr_text_matrix').style.display = "none";
    document.getElementById('Matrix').style.display = "none";
}

function showelements() {
    document.getElementById('Full_Screen').style.display = "unset";
    document.getElementById('Instr_text').style.display = "unset";
    document.getElementById('Instr_text_matrix').style.display = "unset";
    document.getElementById('Matrix').style.display = "unset";
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
hideelements();
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
     showelements();
        document.exitFullscreen();
      }
    }
  } 
  document.addEventListener('keydown', event => {
      if(event.isComposing || event.code == 'KeyF') {
            toggleFullScreen();
        }
    });



