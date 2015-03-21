(function ( $ ) {
 	 $.fn.wsBtn = function(options) {

		// Configuration
		var settings = $.extend({
			// These are the defaults.
			message		: "This button fires only in devices.",
			bgColor		: "#090",
			container	: ".post",
			target		: "h2"
		}, options );
 
		// Variables
		var el 			= $(this);
		var boxes		= el.find(settings.container);
		var targetTo	= boxes.find(settings.target);
		var aTag		= targetTo.find('a');
		var devices		= /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		
		if(aTag && devices){
			
			// get data
			var url 	= aTag.attr('href');
			var txt 	= targetTo.text();
			
			// appending WhatsApp Sharing button to container
			boxes.append("<a href='whatsapp://send' class='wa_btn wa_btn_s' data-text='"+txt+"' data-href='"+url+"'><i class='fa fa-whatsapp'></i> Share</a>");
		}
		else{
			boxes.on("click",".wa_btn", function() {
				console.log(settings.message);	
			});
		}
 
    };
 
}( jQuery ));