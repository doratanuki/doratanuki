function updateImageSrc() {
    var windowWidth = window.innerWidth;
    var imgElements = document.getElementsByClassName('works-img');
  
    for (var i = 0; i < imgElements.length; i++) {
      if (windowWidth > 480) {
        imgElements[i].src = 'images/works/pc/sample1.png';
      } else {
        imgElements[i].src = 'images/works/sp/titech.jpeg';
      }
    }
  }
  
  updateImageSrc();
  
  window.addEventListener('resize', function() {
    updateImageSrc();
  });