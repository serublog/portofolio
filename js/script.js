window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const header = document.querySelector("header");
    // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
    header.classList.toggle("scroll", window.scrollY > 10);
  });


  $(function() {
    // totop
    $(window).scroll(function() {
      // 100pxスクロールしていたらトップに戻るボタンを表示
      if($(this).scrollTop() > 100) { 
        $('.totop').show();
      } else {
       $('.totop').hide();
      }
    });
    // トップに戻るボタンを押したらトップに戻る
    $('.totop').click(function() {
      $("body,html").animate({scrollTop:0},800);
    });
  });

//ハンバーガーメニューの開閉
$('.burger-btn').on('click',function(){
    $('.header__nav').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
    $('.mask').toggleClass('open');
    $('.site-title').toggleClass('hidden');
    $('body').toggleClass('noscroll'); 
});

$('.slider').slick({
  autoplay:true,
  autoplaySpeed:5000,
  dots:true,
  prevArrow: false,
  nextArrow: false,
});
