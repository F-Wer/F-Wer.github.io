document.addEventListener('keydown', event => {
    if(event.isComposing || event.code == 'ArrowUp') {
        console.log('UP');
        document.addEventListener('keydown', event => {
            if(event.isComposing || event.code == 'ArrowUp') {
                document.addEventListener('keydown', event => {
                    if(event.isComposing || event.code == 'ArrowDown') {
                        document.addEventListener('keydown', event => {
                            if(event.isComposing || event.code == 'ArrowDown') {
                                document.addEventListener('keydown', event => {
                                    if(event.isComposing || event.code == 'ArrowLeft') {
                                        document.addEventListener('keydown', event => {
                                            if(event.isComposing || event.code == 'ArrowRight') {
                                                document.addEventListener('keydown', event => {
                                                    if(event.isComposing || event.code == 'ArrowLeft') {
                                                        document.addEventListener('keydown', event => {
                                                            if(event.isComposing || event.code == 'ArrowRight') {
                                                                document.addEventListener('keydown', event => {
                                                                    if(event.isComposing || event.code == 'KeyB') {
                                                                        document.addEventListener('keydown', event => {
                                                                            if(event.isComposing || event.code == 'KeyA') {
                                                                                document.addEventListener('keydown', event => {
                                                                                    if(event.isComposing || event.code == 'Space') {
                                                                                        var rotated = false;
/* var elements = document.querySelectorAll('body *'), i;
for (i = 0; i < elements.length; ++i) {
    console.log(elements);
    deg = rotated ? 0 : 180;
    elements[i].style.webkitTransform = 'rotate('+deg+'deg)'; 
    elements[i].style.mozTransform    = 'rotate('+deg+'deg)'; 
    elements[i].style.msTransform     = 'rotate('+deg+'deg)'; 
    elements[i].style.oTransform      = 'rotate('+deg+'deg)'; 
    elements[i].style.transform       = 'rotate('+deg+'deg)'; 

    rotated = !rotated;
  } */
  document.body.style.background = "url('https://media1.tenor.com/images/bb6aa5121851f1b57a2cb50f73005c66/tenor.gif?itemid=8375212')";
  hideelements();
  setTimeout(function() {
    document.body.style.background = '';
    document.body.style.backgroundColor = 'BLACK';
    showelements();
  }, 10000)
                                                                                    }});
                                                                                }});
                                                                            }});
                                                                        }});
                                                                    }});
                                                                }});
                                                            }});
                                                        }});
                                                    }});
                                                }});
                                            }});
                                            
                                                                                