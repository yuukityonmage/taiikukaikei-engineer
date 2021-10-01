$(function(){
	var $win = $(window),
		$fv = $(".fv"),
		$header = $(".header, .header-inner")
		fvHeight = $fv.outerHeight(),
		fixedClass = "fixed";

	$win.on("load scroll",function(){
		var value = $(this).scrollTop();
			if($win.width()>600)
				if(value > fvHeight*0.2){
					$header.addClass(fixedClass);
				}else{
					$header.removeClass(fixedClass);
				}
	});



	// $('.slick01').slick();

	// 追加JS
	{
		$('.slick01').slick({
			// slickのオプション設定
			autoplay:true,
			dots:true,
			arrows:true,
			// FIXME：slick-theme.cssはデフォルトだとarrowが透明でサイズがないという仕様になっており、
			// slick-theme.cssをいじるか以下のようにオリジナル矢印を設定するかですが楽なので以下のようにしてます。
			prevArrow:'<i class="fas fa-arrow-left arrow-icon-left"></i>',
			nextArrow:'<i class="fas fa-arrow-right arrow-icon-right"></i>'
		});
	}

	$('.burger-btn').on('click',function(){
	  $('.header-nav').fadeToggle(300);
	  $('.burger-btn').toggleClass('cross');
	  $('body').toggleClass('noscroll');
	});
});

// ローディング用のJS
{
	// ここは今回のようにJSのDOM操作ではなく、jQueryを使っても実装できます。
	window.onload = function() {
		const spinner = document.getElementById('loading');
		spinner.classList.add('loaded');
	  }
}
