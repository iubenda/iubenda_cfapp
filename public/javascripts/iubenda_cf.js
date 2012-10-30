CloudFlare.define("iubenda",
    [       "iubenda/config", "cloudflare/jquery1.7"],
    function(config,                $)
    {
		function addBadge(){
			console.log("adding...")
			var embeddedCode = "<a href=\"http://staging.mater.iubenda.com/privacy-policy/1/"+config.domain_id+"\" class=\"iubenda-white iubenda-embed iub-anchor\" title=\"Privacy Policy\">Privacy Policy</a><script type=\"text/javascript\">(function (w,d) {var loader = function () {var s = d.createElement(\"script\"), tag = d.getElementsByTagName(\"script\")[0]; s.src = \"http://staging.mater.iubenda.com/assets/cdn/iubenda.js\"; tag.parentNode.insertBefore(s,tag);}; loader();})(window, document);</script>";
			$("body").append(embeddedCode);
			console.log("added!")
		}
		function lookForBadge(){
			console.log("looking for...")
			if(!config.skip_badge){
				if(!$(".iubenda-ibadge")[0] && !$(".iubenda-embed")[0] && !$("#iubenda-embed")[0]){
					console.log("other badge or pp embedded not found. Calling addBadge()...")
					addBadge();
				}else{
					console.log("other iubenda components found:")
					console.log("!$('.iubenda-ibadge')[0]")
					console.log(!$(".iubenda-ibadge")[0])
					console.log("!$('.iubenda-embed')[0]")
					console.log(!$(".iubenda-embed")[0])
					console.log("!$('#iubenda-embed')[0]")
					console.log(!$("#iubenda-embed")[0])
				}
			}else{
				console.log("badge skipped by configuration!")
			}
		}
		lookForBadge();
    }
)
