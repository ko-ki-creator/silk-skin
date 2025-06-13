// オープニング
$(function() {
	setTimeout(function(){
		$('.js-opening').fadeIn(1600);
	},400); //0.4秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});


// セクションフェードイン
jQuery(function ($) {
	const fadeIn = $('.fade-in');
	$(window).scroll(function () {
		$(fadeIn).each(function () {
			const offset = $(this).offset().top;
			const scroll = $(window).scrollTop();
			const windowHeight = $(window).height();
			if (scroll > offset - windowHeight + 150) {
				$(this).addClass("scroll-in");
			}
		});
	});
});
