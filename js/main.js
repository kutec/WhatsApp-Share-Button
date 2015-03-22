/*
 * jQuery Plugin: WhatsApp Share Button
 * Article		: http://teckstack.com/whatsapp-share-button	
 * Demo			: http://demo.teckstack.com/WhatsApp-Share-Button
 *
 * Copyright (c) 2015 Kushal Jayswal <kushal@about.me>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */
(function ($) {
 	 $.fn.wsBtn = function(options) {

		// Configuration
		var settings = $.extend({
			// These are the defaults.
			message			: "This button fires only in devices.",
			bgColor			: "#090",
			container		: ".post",
			target			: "h2"
		}, options );
 		
		this.each(function(){
			// Variables
			var el 			= $(this);
			var box			= el.find(settings.container);
			var targetTo	= box.find(settings.target);
			var aTag		= targetTo.find('a');
			var devices		= /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			
			// Conditional Check
			if(aTag && devices){
				// appending WhatsApp Sharing button to container
				box.append("<a href='#' class='wa_btn wa_btn_s' data-text='' data-href=''><i class='fa fa-whatsapp'></i> Share</a>");
			}
			
			// Future Plan
			/*else{
				boxes.on("click",".wa_btn", function() {
					alert(settings.message);	
				});
			}*/
			
			// Data Manipulation
			box.on('click','.wa_btn',function(){
				var url 	= $(this).parent(box).find(aTag).attr('href');
				var txt		= $(this).parent(box).find(targetTo).text();
				var wmsg	= encodeURIComponent(txt)+" - "+encodeURIComponent(url);
				var wurl	= 'whatsapp://send?text='+wmsg;
				
				$(this).attr('href',wurl);
				$(this).attr('data-href',url);
				$(this).attr('data-text',txt);				
			});
			
		});
    };
 
}( jQuery ));