CloudFlare.define("iubenda",
    [       "iubenda/config", "cloudflare/jquery1.7"],
    function(_config,$)
    {
		function addBadge(){
			console.log("adding...");
			var embeddedCode = "<a href=\"http://staging.mater.iubenda.com/privacy-policy/1/"+_config.domain_id+"\" class=\"iubenda-white iubenda-embed iub-anchor\" title=\"Privacy Policy\">Privacy Policy</a><script type=\"text/javascript\">(function (w,d) {var loader = function () {var s = d.createElement(\"script\"), tag = d.getElementsByTagName(\"script\")[0]; s.src = \"http://staging.mater.iubenda.com/assets/cdn/iubenda.js\"; tag.parentNode.insertBefore(s,tag);}; loader();})(window, document);</script>";
			console.log("embedding code: "+embeddedCode);
			$("body").append(embeddedCode);
			console.log("added!");
		}
		function lookForBadge(){
			console.log("looking for adding badge...");
			console.log("_config.skip_badge: "+_config.skip_badge);
			console.log("_config.skip_badge type:"+typeof(_config.skip_badge));
			if(_config.skip_badge=="true"){
				console.log("badge skipped by configuration!");
			}else{
				if(!$(".iubenda-ibadge")[0] && !$(".iubenda-embed")[0] && !$("#iubenda-embed")[0]){
					console.log("other badge or pp embedded not found. Calling addBadge()...");
					addBadge();
				}else{
					console.log("other iubenda components found:");
					console.log("!$('.iubenda-ibadge')[0]");
					console.log(!$(".iubenda-ibadge")[0]);
					console.log("!$('.iubenda-embed')[0]");
					console.log(!$(".iubenda-embed")[0]);
					console.log("!$('#iubenda-embed')[0]");
					console.log(!$("#iubenda-embed")[0]);
				}
			}
		}
		lookForBadge();
    }
)
