# WhatsApp Share Button
**A simple jQuery plugin to integrate WhatsApp Share Button to a blog.**

This plugin guide you how you can easily share URL of an article/post on WhatsApp application. Thiw allows you to configure some options for look and feel. Further that has been not decided how we can integrate this for desktop version of the WhatsApp but I will work on that too. For now you can simply follow below guideline to configure this plugin for you web project in responsive design.

If you have any doubts or query, do not hasitate to shoot me an email on ku@kutec.co.in.

Iuse to share my knowledge on my tech blog - http://teckstack.com - please subscribe to get regular updates.

## Documentation
This document shows you manipulation with jQuery and HTML markups.

### jQuery Plugin Code
<pre>
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
</pre>
### Sample HTML Code
<pre>
&lt;div class="posts"&gt;
    &lt;div class="post"&gt;
        &lt;h2&gt;&lt;a href="http://teckstack.com/how-to-configure-sass-for-html-projects">How to Configure SASS for HTML Projects&lt;/a&gt;&lt;/h2&gt;

        &lt;p&gt;SASS is booming the world with giving super powers to CSS and if you don’t know about it, you must gain your knowledge as a front end developer. The configuration for SASS is so simple but I observed that people avoids it or leave it to core developers. As I opine, when we can do more in less time, we should definitely go for it!&lt;/p&gt;            
    &lt;/div&gt;
    
    &lt;div class="post"&gt;
        &lt;h2&gt;&lt;a href="http://teckstack.com/creating-color-palette-sass">Creating Color Palette with SASS
&lt;/a&gt;&lt;/h2&gt;

        &lt;p&gt;Maintaining multiple color themes with a project is tedious task for a developer. SASS is popular CSS pre-processor. It works with simple motto – “reducing efforts with improved CSS”.&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>

<hr>

Effots by [@kutec](https://twitter.com/kutec) and posted on <http://teckstack.com/whatsapp-share-button>.

Follow my blog: [@teckstack](https://twitter.com/teckstack).

Thanks.
