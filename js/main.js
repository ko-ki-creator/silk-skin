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


// 初期表示時の文字色変更
$(window).on('load', function ()
	{
		$.each($('input[type=date]'), (index, datebox) =>
			{
				datebox.style.color = (datebox.value) ? 'black' : 'white';
			}
		);
	}
);

$(function ()
	{
		// フォーカス取得時は入力用にいったん色を付ける
		$('input[type=date]').focus(function (event)
			{
				this.style.color = 'black';
			}
		);

		// フォーカス喪失後の文字色変更
		$('input[type=date]').blur(function (event)
			{
				this.style.color = (this.value) ? 'black' : 'white';
			}
		);
	}
);