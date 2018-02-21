// ==UserScript==
// @name         Force the background
// @namespace    http://tampermonkey.net/
// @version      1.0.5
// @description  places a beautiful background color to all the elements
// @author       NuclearSnake
// @match        *://*/*
// @updateURL       https://github.com/NuclearSnake/Useful_JS_LifeHacks/raw/master/ForceBackground.user.js
// @downloadURL     https://github.com/NuclearSnake/Useful_JS_LifeHacks/raw/master/ForceBackground.user.js
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==


function setGoodBackground(bad_background_element){
    bad_background_element.style.backgroundColor = '#F8ECC2';
}

function forceTheBackground(){
// Find all elements on the page
    var elems = document.body.getElementsByTagName("*");
    for(var i = 0; i < elems.length; i++){
        setGoodBackground(elems[i]);
    }
}

(function() {
    'use strict';
    $( document ).ready(function() {
        forceTheBackground();
        setTimeout(forceTheBackground,5000);
    });
})();
// --------------------- Old code ----------------------
