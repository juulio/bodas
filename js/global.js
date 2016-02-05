var lista_regalos = window.lista_regalos || {};
(function(context, $) {
	
	function loadGoogleAnalyticsCode() {
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-2558122-11']);
		_gaq.push(['_trackPageview']);
		
		(function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	}
	
	function init() {
		loadGoogleAnalyticsCode();
	}
	
	$(init);

})(lista_regalos, jQuery);
