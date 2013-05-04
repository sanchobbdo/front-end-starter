var NS = NS || {};
NS.Site = (function(){
	'use strict';
	$(document).on('ready', function(){
		// @todo Write here the Javascript

		$('#id').on('click',function(e) {
			//actions
			e.preventDefault();
		});

		//GOOGLE ANALYTICS EVENTS
        $('.btn').on('click', function(){
            var title = $(this).attr('title');
            _gaq.push(['_trackEvent', 'Button: ' + title, 'Click', $(this).attr('href')]);
        });
	});
}());