CloudFlare.define("iubenda",
    [       "iubenda/config", "cloudflare/jquery1.7"],
    function(_config,$)
    {		
		function addBadge(){
			var protocol = window.location.protocol != "https:" ? "http:" : "https:";
			var embeddedCode = "<a href=\""+protocol+"//www.iubenda.com/privacy-policy/1/"+_config.domain_id+"\" class=\"iubenda-white iubenda-embed no-brand iub-anchor\" title=\"Privacy Policy\">Privacy Policy</a><script type=\"text/javascript\">(function (w,d) {var loader = function () {var s = d.createElement(\"script\"), tag = d.getElementsByTagName(\"script\")[0]; s.src = \""+protocol+"//cdn.iubenda.com/iubenda.js\"; tag.parentNode.insertBefore(s,tag);}; loader();})(window, document);</script>";
			$("body").append(embeddedCode);
		}
		function lookForBadge(){
			if(_config.skip_badge=="true"){
				//console.log("badge skipped by configuration!");
			}else{
				if(!$(".iubenda-ibadge")[0] && !$(".iubenda-embed")[0] && !$("#iubenda-embed")[0]){
					addBadge();
				}else{
					//console.log("other iubenda components found:");
				}
			}
		}
		lookForBadge();
    }
)
