// ==UserScript==
// @name         Youtube Hide Control
// @version      0.1
// @namespace    https://github.com/TheFantasticWarrior
// @description  Automatically hide youtube control bar when paused
// @author       TFW
// @match        https://*.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==
 
(function() {
    var timer;
    document.addEventListener('mousemove', function(){
        if(document.getElementsByClassName("html5-video-player")[0].classList.contains("ytp-autohide")){
        document.getElementsByClassName("html5-video-player")[0].classList.remove("ytp-autohide");
        }
        clearTimeout(timer);
        timer = setTimeout(noAction, 1000);
    });
 
    function noAction(){
        if(!document.getElementsByClassName("html5-video-player")[0].classList.contains("ytp-autohide")){
        document.getElementsByClassName("html5-video-player")[0].classList.add("ytp-autohide");
        }
    }
})();
