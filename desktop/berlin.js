$(document).ready(function(){

		//REMOVE Banner and Change width
		$('img[src$="assets/img/nwd.jpg').hide();
		$('img[src$="http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/LONGBANNER-2.png').css('width', '840px');

		//Remove Result Long Carousel
		var owlCarousel = jQuery("#latest-results .owl-carousel").data('owlCarousel');
		var maxRange = 40;
		for (i = 12; i < maxRange; i++) {
			owlCarousel.removeItem(1);
		}

		//Change Result Carousel Image
		$('#latest-results .owl-carousel').find('.owl-item img').eq(0).attr('src', 'http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/iconHK2.png');
		$('#latest-results .owl-carousel').find('.owl-item img').eq(1).attr('src', 'http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/iconCANADA2.png');
		$('#latest-results .owl-carousel').find('.owl-item img').eq(2).attr('src', 'http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/iconSYD2.png');
		$('#latest-results .owl-carousel').find('.owl-item img').eq(3).attr('src', 'http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/iconSIAM2.png');
		$('#latest-results .owl-carousel').find('.owl-item img').eq(4).attr('src', 'http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/iconSGP2.png');
		$('#latest-results .owl-carousel').find('.owl-item img').eq(5).attr('src', 'http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/iconSAIGON2.png');
		$('#latest-results .owl-carousel').find('.owl-item img').eq(6).attr('src', 'http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/iconMGM2.png');
		$('#latest-results .owl-carousel').find('.owl-item img').eq(7).attr('src', 'http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/iconMACAU2.png');
		$('#latest-results .owl-carousel').find('.owl-item img').eq(8).attr('src', 'http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/iconKHMER2.png');
		$('#latest-results .owl-carousel').find('.owl-item img').eq(9).attr('src', 'http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/iconISRAEL2.png');

		//Remove Bank Long Carousel
		var owlCarousel = jQuery("#bank .owl-carousel").data('owlCarousel');
		for (i = 0; i < 9; i++) {
			owlCarousel.removeItem(0);
		}
		$('#bank .col-md-9 div').eq(1).remove();
		$('#bank .col-md-9 div').eq(2).remove();

		//Change Bank Result Carousel Image
		$('#bank .col-md-9').prepend('<center><div id="bank-list"></div></center>');
		$('#bank-list').prepend('<img src="http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/bankbri2.png" width="168px" height="50px"/>');
		$('#bank-list').prepend('<img src="http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/bankmandiri2.png" width="168px" height="50px"/>');
		$('#bank-list').prepend('<img src="http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/bankbca2.png" width="168px" height="50px"/>');
		$('#bank-list').prepend('<img src="http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/bankdanamon2.png" width="168px" height="50px"/>');
		$('#bank-list').prepend('<img src="http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/bankbni2.png" width="168px" height="50px"/>');
		$('#bank-list').prepend('<img src="http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/bankgopay2.png" width="168px" height="50px"/>');
		$('#bank-list').prepend('<img src="http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/bankovo2.png" width="168px" height="50px"/>');


		

		//Change Background Image and Logo
		$('body').css('background', '#000000 url(http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/background.jpg) no-repeat center center fixed');
		$('body').css('-webkit-background-size', 'cover');
		$('body').css('-moz-background-size', 'cover');
		$('body').css('-o-background-size', 'cover');
		$('body').css('background-size', 'cover');

		$('.navbar-brand.skrollable').css('background', 'url(http://kekinian.daftarterpercaya.site/wp-content/uploads/2021/03/logobursaweb-copy.png');

		//Change NavBar Color
		$('.navbar').css('background-color', 'black');
		$('.container').css('background', 'rgba(7, 27, 34, 0.42)');

		//Change Footer
		$('a').css('color', 'white');
		$('.container').css('text-align', 'center');
	})
