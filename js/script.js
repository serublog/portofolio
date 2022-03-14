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


//googleform
let $form = $('#js-form')
    
$form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() {
            $form.slideUp()
            $('#js-success').slideDown()
          //送信に成功したときの処理 
        }, 
        200: function() { 
            $form.slideUp()
            $('#js-error').slideDown()
          //送信に失敗したときの処理 
        }
      } 
    });
    return false; 
  }); 

// formの入力確認
let $submit = $( ' #js-submit' )
$( '#js-form input, #js-form textarea' ).on( 'change', function(){
    if(
        $('#js-form input[type="text"]' ).val() !== "" &&
        $('#js-form input[type="email"]' ).val() !== "" &&
        $('#js-form input[name="entry.1356928949"]' ).prop( 'checked' ) === true
    ) {
        //全て入力された時
        $submit.prop( 'disabled', false)
        $submit.addClass( '-active' )
    } else {
        // 入力されていない時
        $submit.prop( 'disabled', true)
        $submit.removeClass( '-active' )
    }
});

