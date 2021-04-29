// ==UserScript==
// @name         Direct Google Search URLs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Nirav Madhani
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @match        https://www.google.com/search?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    //var script = document.createElement('script');script.src = "https://code.jquery.com/jquery-3.4.1.min.js";document.getElementsByTagName('head')[0].appendChild(script);
$.urlParam = function(name,URL){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(URL);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

        $('a').each(function(){
           $(this).attr('onmousedown','');

        });

})();
