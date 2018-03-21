
jQuery.noConflict();
var companyMenuTop = companyMenuHeight = 0;
var companyMenuObj = {};
var postExperienceObj = {};
jQuery(function($){
	
		
	//Click event to scroll to top
	$('.scrollToContent').click(function(){
		var scrollToContent = $(this).data('scrollto');
		if (scrollToContent !== 'undefined' && scrollToContent != '' && $(scrollToContent).length) {
			$('html, body').animate({
				'scrollTop' : $(scrollToContent).offset().top - companyMenuHeight + 1 
			}, 500);
		}
		return false;
	});
	
    
  //js for sticky menu
  /*$(window).scroll(function() {
      var topCount = $(window).scrollTop();
      if (topCount > 150) {
          $(".reboot-header").addClass("reboot-header-sticky");
      } else {
          $(".reboot-header").removeClass("reboot-header-sticky");
      }
  });*/




  // js for header menu sticky
  var  mn = $('.reboot-menu-wrap');
  var mns = "reboot-header-sticky";
  var hdr = mn.height();
  var hdrTollerate = hdr * 3;

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdrTollerate ) {
      if (!(mn.hasClass(mns))) {
        mn.stop();
        $('header').css({'padding-top' : hdr + 'px'});
        mn.addClass(mns).css({
          'top' : (-1 * hdr) + 'px'
        }).animate({
          'top' : '0px'
        }, 250, 'easeOutSine', function() {

        });
      }
    } else {
      if (mn.hasClass(mns)) {
        mn.stop();
        mn.animate({
          'top' : (-1 * hdr) + 'px'
        }, 250, 'easeOutSine', function() {
          $('header').removeAttr('style');
          mn.removeClass(mns).removeAttr('style');
        });
      }
    }
  });



  //js for collapse
  $('.collapse').collapse();


    
  // Js for reboot-iteam-slider-for
  $('.reboot-iteam-slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.reboot-iteam-slider-nav'
  });
    
  // Js for reboot-iteam-slider-nav
  var $rebootItemsSlickNavElement = $('.reboot-iteam-slider-nav');

  $rebootItemsSlickNavElement.on('init beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (!nextSlide || nextSlide < 2) {
      $(slick.$slideTrack[0]).addClass('slick-track-first');

    } else {
      $(slick.$slideTrack[0]).removeClass('slick-track-first');
    }

  });


  $rebootItemsSlickNavElement.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.reboot-iteam-slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: "130px",
      infinite: false,
      arrows: false,

      responsive: [
          {
            breakpoint: 2400,
            settings: {
              centerPadding: "200px"
            }
          },
          {
            breakpoint: 1380,
            settings: {
              centerPadding: "130px"
            }
          },
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding: "100px"
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "50px"
            }
          }
          ]
    });

    

  /*
    // js for inactive after slide item 
    $('.product-single-iteam').click(function(){  
            var currentSlick = document.getElementsByClassName('slick-current')[0];
      var currentSlickIndex = currentSlick.getAttribute('data-slick-index');
      var inactiveIndex = parseInt(currentSlickIndex)+2;
      var index = inactiveIndex.toString();
      var meta = 'figure[data-slick-index="'+index+'"]';
            // console.log(inactiveIndex);
      var query = document.querySelector(meta);
            query.classList.remove('slick-active');
    });
  var currentSlick = document.getElementsByClassName('slick-current')[0];
  var currentSlickIndex = currentSlick.getAttribute('data-slick-index');
  var inactiveIndex = parseInt(currentSlickIndex)+2;
  var index = inactiveIndex.toString();
  var meta = 'figure[data-slick-index="'+index+'"]';
  var query = document.querySelector(meta);
            query.classList.remove('slick-active');

  */




});

