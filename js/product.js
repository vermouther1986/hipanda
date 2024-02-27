// JavaScript Document

<!--スコロルー-->

 $(window).on('load resize', function() {
  var windowWidth = window.innerWidth;
  var elements = $('#left');
  if (windowWidth >= 768) {
    Stickyfill.add(elements);
  }else{
    Stickyfill.remove(elements);
  } 
});

<!--toggle-->
$(".chicun").click(function () {
  $(".size_image").slideToggle();
});
$(".cailiao").click(function () {
  $(".cailiao_p").slideToggle();
});
$(".fasong").click(function () {
  $(".fasong_p").slideToggle();
});
$(".tucao").click(function () {
  $(".review_inner").slideToggle();
});

<!--スムーススコロルー-->
$(function(){
  var headerHeight = $('header').outerHeight(); // ヘッダーについているID、クラス名など、余白を開けたい場合は + 10を追記する。
  var urlHash = location.hash; // ハッシュ値があればページ内スクロール
  if(urlHash) { // 外部リンクからのクリック時
    $('body,html').stop().scrollTop(0); // スクロールを0に戻す
    setTimeout(function(){ // ロード時の処理を待ち、時間差でスクロール実行
      var target = $(urlHash);
      var position = target.offset().top - headerHeight;
      $('body,html').stop().animate({scrollTop:position}, 500); // スクロール速度ミリ秒
    }, 100);
  }
  $('a[href^="#"]').click(function(){ // 通常のクリック時
    var href= $(this).attr("href"); // ページ内リンク先を取得
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500); // スクロール速度ミリ秒
    return false; // #付与なし、付与したい場合は、true
  });
});

<!--拡大ー-->




