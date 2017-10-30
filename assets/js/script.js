jQuery( document ).ready(function() {


	// ========== HEADROOM NAVIGATIE ========== //
	var myElement = document.querySelector(".headroom");
	var headroom = new Headroom(myElement, {
	  "tolerance": 10
	});
	headroom.init();

	// ========== SAME HEIGHT ========== //
    jQuery('.text-columns .row').each(function() {
        jQuery(this).children('.sameHeight').matchHeight({});
    });
    jQuery('.team .row').each(function() {
        jQuery(this).children('.sameHeight').matchHeight({});
    });

    // ========== SLIDER ========== //
	jQuery(".img-slider").lightSlider({
        loop:false,
        auto: true,
        speed: 600,
        pause: 6000,
        keyPress:true,
        item: 1,
        controls: false,
        pager: false,
    });

    // ========== YOUTUBE IFRAMES ========== //
	jQuery(function () {
		jQuery(".youtube").YouTubeModal({autoplay:1, width:640, height:480});
	});

	jQuery(".scrolltonext").on("click", function() {
		jQuery('html, body').animate({
       		scrollTop: jQuery(this).closest('section').next().offset().top
    	}, 800);
    	return false;
	});

    jQuery("#contactForm").submit(function(event){
      event.preventDefault();
      $.ajax({
        url: jQuery(this).attr("action"),
        method: jQuery(this).attr("method"),
        dataType: "json",
        accepts: "application/json",
        data: jQuery(this).serialize(),
        success: function(){
        	jQuery('#contactForm').trigger("reset");
         	jQuery(".thankyou").show();
        	setTimeout(function() {
    			jQuery(".thankyou").hide();
		  	}, 3000);
        },
        error: function(){
          console.log("Failure. Try again.");
        }
      });
    });

	// ========== SKROLLR - PARALLAX ========== //
	var s = skrollr.init({
		forceHeight: false,
		smoothScrolling: false,
		mobileDeceleration: 0.004
	});
    if (!s.isMobile()) {
    	setTimeout(function () {
    	  s.refresh();
    	}, 01000);
    }

    if (s.isMobile() || 
    	("safari"==platform.name.toLowerCase()&&"os x"==platform.os.family.toLowerCase())) {
        s.destroy();
    }
});