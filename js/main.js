(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
	$("#sticky-header").removeClass("sticky");
	$('#back-top').fadeIn(500);
	} else {
	$("#sticky-header").addClass("sticky");
	$('#back-top').fadeIn(500);
	}
});


$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
	  0:{
		  items:1,
		  nav:false,
	  },
	  767:{
		  items:1,
		  nav:false,
	  },
	  992:{
		  items:1,
		  nav:false
	  },
	  1200:{
		  items:1,
		  nav:false
	  },
	  1600:{
		  items:1,
		  nav:true
	  }
  }
});


// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
	masonry: {
	  // use outer width of grid-sizer for columnWidth
	  columnWidth: 1
	}
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
	delay: 10,
	time: 900
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
	upKey: 38,             // key code to navigate to the next section
	downKey: 40,           // key code to navigate to the previous section
	easing: 'linear',      // the easing function for animation
	scrollTime: 600,       // how long (in ms) the animation takes
	activeClass: 'active', // class given to the active nav element
	onPageChange: null,    // function(pageIndex) that is called when page is changed
	topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '4500', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
	  0:{
		  items:1,
		  nav:false

	  },
	  767:{
		  items:4
	  },
	  992:{
		  items:7
	  }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
	  0:{
		  items:1,
		  nav:false

	  },
	  767:{
		  items:1,
		  nav:false
	  },
	  992:{
		  items:2,
		  nav:false
	  },
	  1200:{
		  items:1,
	  },
	  1501:{
		  items:2,
	  }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.causes_active').owlCarousel({
  loop:true,
  margin:30,
// autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
  dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
	  0:{
		  items:1,
		  nav:false

	  },
	  767:{
		  items:2,
		  nav:false
	  },
	  992:{
		  items:3,
		  nav:false
	  },
	  1200:{
		  items:3,
	  }
  }
});
  //about-pro-active
$('.news_active').owlCarousel({
  loop:true,
  margin:30,
// autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
  dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
	  0:{
		  items:1,
		  nav:false

	  },
	  767:{
		  items:1,
		  nav:false
	  },
	  992:{
		  items:2,
		  nav:false
	  },
	  1200:{
		  items:2,
	  }
  }
});

});

// resitration_Form
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});



//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



		// Search Toggle
		$("#search_input_box").hide();
		$("#search").on("click", function () {
			$("#search_input_box").slideToggle();
			$("#search_input").focus();
		});
		$("#close_search").on("click", function () {
			$('#search_input_box').slideUp(500);
		});
		// Search Toggle
		$("#search_input_box").hide();
		$("#search_1").on("click", function () {
			$("#search_input_box").slideToggle();
			$("#search_input").focus();
		});

})(jQuery);	

// For member carousel
(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
		loop:true,
		autoplay: true,
		autoplayTimeout:3000,
		margin:30,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		nav:true,
		dots: true,
		autoplayHoverPause: false,
		items: 1,
		navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
		responsive:{
		  0:{
			items:1
		  },
		  600:{
			items:2
		  },
		  1000:{
			items:3
		  }
		}
		});

	};
	carousel();

})(jQuery);

// For top carousel
(function($) {

	var carousel = function() {
		$('#top-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout:3000,
			autoplayHoverPause: true,
			slideSpeed : 500,
			singleItem:true,
			items: 1,
			dots: false,
		});

	};
	carousel();

})(jQuery);

// If user click on Confirm Paymetn for credit card, display Not supported warning
$('#confirm-payment').click(() => {
	var alert_msg = `
		<div id="notsup-warning" class="alert alert-warning alert-dismissible fade show" role="alert">
			<strong>Coming soon!</strong> Hiện chúng tôi tạm thời chưa hỗ trợ tính năng này
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	`
	$('#warning-place').html(alert_msg)

	// Then make alert slideup to disappear
	$('#notsup-warning').ready(() => {
		window.setTimeout(function() {
			$("#notsup-warning").fadeTo(500, 0).slideUp(500, function(){
				$(this).remove(); 
			});
		}, 5000);
	})
	//$('#notsup-warning').attr("style", "display: block;")
})


// Block F12 keystroke
var blocker = function(){
	$(document).keydown(function(event){
		if(event.keyCode==123){
			return false;
		}
		else if (event.ctrlKey && event.shiftKey && event.keyCode==73){        
			return false;
		}
	});

	$(window).keydown(function(event){
		if(event.keyCode==123){
			return false;
		}
		else if (event.ctrlKey && event.shiftKey && event.keyCode==73){        
			return false;
		}
	});
	
	// Block web inspector
	document.addEventListener('contextmenu', function(e) {
		e.preventDefault();
	});
	
	// Block web inspection by other key combinations
	document.onkeydown = function(e) {
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		   return false;
		}
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
		   return false;
		}
		if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
		   return false;
		}
		if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
		   return false;
		}
	}
}

$(document).ready(function(){
	blocker()
})

$(window).ready(function(){
	blocker()
})

// =========================== Bank transfer infor content change ===================== //
var ids=["vcbank", "acb"];
var dropDown = document.getElementById("bank-selector");

dropDown.onchange = function(){
	console.log(this.value)
	$('#bank-detail').attr('style', 'display: block;')
	// 
	for(var x = 0; x < ids.length; x++){   
        document.getElementById(ids[x]).style.display="none";
    }    
	document.getElementById(this.value).style.display = "block";
}

//============================ Pop up window fade out effect in donation page ============= //
$('#open-link').click(function(){
    $("#ex1").modal({
        fadeDuration: 1000,
        fadeDelay: 0.1
    });
})

// ========================== pop up for each net-banking method =========================//
// MOMO payment moodal
new jBox('Modal', {
    attach: '#momo-pay',
    height: 500,
    width: 500,
	animation: 'zoomIn',
	draggable: 'title',
	blockScroll: true,
    title: `<p style="text-align: center;">Quyên góp qua <img src="https://bit.ly/3k9Q2gb" alt="momo" style="max-width: 10%;"></p>`,
    content:
      `	<div style="text-align: center;">
	  	<p>Tên tài khoản MOMO: <strong>NGUYỄN DIỆU YẾN NHI</strong></p>
	  	<p>Số tài khoản MOMO: <strong>0382297432</strong></p>
        <p id="momo_link">Hoặc truy cập link sau: <button type="button" class="btn btn-primary" id="get_momo">Nhấn dể get link</button></p>
	  	<p>Hoặc quét mã QR sau:</p>
	  	<img src="https://i.ibb.co/LkQw6tY/image.png" alt="" style="max-width: 50%;">
  		</div>

  	`,
	
});

// get link button to show link
$(document).on("click", "#get_momo", function(){
    $('#get_momo').remove()
    $('#momo_link').html('<a href="https://nhantien.momo.vn/nJAVMbvuT2v" target="blank">https://nhantien.momo.vn/nJAVMbvuT2v</a>')
})

//ZaloPay
new jBox('Modal', {
    attach: '#zalo-pay',
    height: 400,
	animation: 'zoomIn',
	draggable: 'title',
	blockScroll: true,
    title: `<p style="text-align: center;">Quyên góp qua <br>
			<img src="https://bit.ly/3wrZAFS" alt="zalo" style="max-width: 20%;">
			</p>
			<div class="alert alert-danger" role="alert">
				Đang trong quá trình cập nhật thông tin, vui lòng sử dụng MOMO
			</div>
			`,
    content:
      `	<div style="text-align: center;">
	  	<p>Tên tài khoản ZaloPay: <strong>xxxxx</strong></p>
	  	<p>Số tài khoản ZaloPay: <strong>xxxxxx</strong></p>
	  	<p>Hoặc quét mã QR sau:</p>
	  	<img src="https://bit.ly/3e7KEX7" alt="" style="max-width: 50%;">
  		</div>

  	`,
	
});

// ViettelPay
new jBox('Modal', {
    attach: '#viet-pay',
    height: 400,
	animation: 'zoomIn',
	draggable: 'title',
	blockScroll: true,
    title: `<p style="text-align: center;">Quyên góp qua <img src="https://bit.ly/3xx1F4Q" alt="viettel" style="max-width: 10%;"></p>
			<div class="alert alert-danger" role="alert">
				Đang trong quá trình cập nhật thông tin, vui lòng sử dụng MOMO
			</div>
	`,
    content:
      `	<div style="text-align: center;">
	  	<p>Tên tài khoản ViettelPay: <strong>xxxxx</strong></p>
	  	<p>Số tài khoản ViettelPay: <strong>Xxxxx</strong></p>
	  	<p>Hoặc quét mã QR sau:</p>
	  	<img src="https://bit.ly/3e7KEX7" alt="" style="max-width: 30%;">
  		</div>

  	`,
	
});