$(document).ready(function(){
	// preloader
	$('.preloader').fadeOut();

	// navBtn
	$('.navBtn').click(function(){
		$('.nav').toggleClass('nav--show')
	});
	
	//collapse after clicking link
    $(document).on('click','.nav--show',function(e) {
    if( $(e.target).is('a') ) {    	
        $('.nav').toggleClass('nav--show')
      }
    });

	//video switch
	$('.video__switch-container').click(function(){
		const value = $('.video__switch-btn').hasClass('btnSlide');
		if(value)
		{
			$('.video__switch-btn').removeClass('btnSlide');
			$('#video').get(0).play()
		} else {
			$('.video__switch-btn').addClass('btnSlide');
			$('#video').get(0).pause()
		}
	});

	//magnific popup
	$('#projects__modal').magnificPopup({
    	delegate: 'a', // child items selector, by clicking on it popup will open
    	type: 'image',
    	image: {
            verticalFit: true,
            titleSrc: function(item) {
              // return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">'+item.el.attr('data-source')+'</a>';
              // return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">'+item.el.attr('data-title')+'</a>';
              return ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">' + item.el.attr('title') + '</a>';
            }
          },
    	gallery: {
      	// options for gallery
      	enabled: true
    }
    // other options
  });


});