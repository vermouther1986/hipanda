var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [
        { src:'./image/top img/IMG_0660.JPG'},
        { src:'./image/top img/矩形 93.png'},
        { src:'./image/top img/IMG_0849.png'}
      ];
    } else {
      var responsiveImage = [
        { src:'' },
        { src:'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_02.jpg' },
        { src:'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-3/img/img_sp_03.jpg' }
      ];
    }

$('#slider').vegas({
    overlay: true,
    transition: 'blur',
    transitionDuration: 2000,
    delay: 10000,
    animationDuration: 20000,
    animation: 'kenburns',
    slides: responsiveImage,
  });
