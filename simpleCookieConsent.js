
 // Cookie Consent
(function() {
    "use strict";
    let cc_config = {
        // =========================== USER DEFINED CONFIGURATION ===========================
        // Use this to change the description
        ccDescription: "This site uses cookies and other tracking technologies to assist with navigation and feedback, analyze your use of the site, assist with our marketing efforts, and provide content from third parties. By using the site you agree to our use of cookies.",
        // Use this to change the link text.
        ccLearnMoreLinkText: "Cookie Policy",
        // Set link URL
        ccLearnMoreUrl: "https://www.mysite.com",
        // Consent button text.
        ccButtonText: "Got It",
        ccCookeExpireDate: 30
        // =========================== END USER DEFINED CONFIGURATION ===========================
    };

   function newCookie(ccName, ccValue, ccExDays) { let ccDate = new Date(); ccDate.setTime(ccDate.getTime() + (ccExDays * 24 * 60 * 60 * 1000)); let ccExpires = "ccExpires=" + ccDate.toUTCString(); document.cookie = ccName + "=" + ccValue + ";" + ccExpires + ";path=/"; } let cContainer = document.createElement('div'); cContainer.setAttribute("id", "ccContainer"); document.body.appendChild(cContainer); function ccContent() { let ccTemplate = "<style>.ccMain { top: 0px; font-size: 12px; line-height: 150%; text-align: left; position: fixed; left: 0; background: #F44336; color: #fff; width: 100%; height: auto; z-index: 99999999; padding: 20px; opacity: 0.95; box-shadow: -1px 1px 20px 4px #000000; } span#cc-message { font-size: 17px; display: inline-block; width: 80%; } #cc-compliance { display: inline-block; float: right; padding: 0px 20px; } a#cc-btn { font-size: 18px; font-weight: bold; padding: 9px 15px; margin: 0px 40px; background: #f44336; border: 2px solid #fff; color: #fff; text-decoration: none; float: right; }</style><div class='ccMain'><span id='cc-message'>" + cc_config.ccDescription + " " + "<a aria-label='learn more about cookies' tabindex='0' id='ccLink' href='cc_config.ccLearnMoreUrl' target='_blank'>" + cc_config.ccLearnMoreLinkText + "</a></span>" + "<div id='cc-compliance'><a id='cc-btn' href='javascript:void(0);'>" + cc_config.ccButtonText + "</a></div></div>"; let ccwindow = document.getElementById("ccContainer").innerHTML = ccTemplate; let cclearnurl = document.getElementById("ccLink").href = cc_config.ccLearnMoreUrl; } if (document.cookie.indexOf("cc_cookie") < 0) { ccContent(); let ccbutton = document.getElementById("cc-btn"); ccbutton.addEventListener("click", function() { document.getElementById("ccContainer").remove(); newCookie("cc_cookie", "yes", cc_config.ccCookeExpireDate); }); } })();
