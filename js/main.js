// オープニング
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},400); //0.4秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
<<<<<<< HEAD
});


jQuery(function ($) {
	var fadeIn = $('.fade-in');
	$(window).scroll(function () {
		$(fadeIn).each(function () {
			var offset = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > offset - windowHeight + 150) {
				$(this).addClass("scroll-in");
			}
		});
	});
=======
>>>>>>> bc4cead197cdfaa7d3db3d847b3694e9dc2cf063
});