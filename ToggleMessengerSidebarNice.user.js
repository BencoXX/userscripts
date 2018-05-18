// ==UserScript==
// @name Toggle Messenger Sidebar Nice
// @version 0.1
// @description Button to hide messengers list of conversations
// @match https://www.messenger.com/*
// @copyright 2018+, BenCOXXX
// @require http://code.jquery.com/jquery-latest.js
// @resource openImg http://downloadicons.net/sites/default/files/shops-open-icon-65322.png
// @resource closeImg http://downloadicons.net/sites/default/files/shops-close-icon-65321.png
// @grant GM_getResourceURL
// ==/UserScript==

$(document).ready(function() {
    var createPosition = function(cls) {
        var prt = document.getElementsByClassName(cls)[0];
        var pos = $('<div class="_1cwz"></div>');
        $(prt).prepend(pos);
        return pos;
    };
    var createImage = function(image, src, alt) {
        var img = image.replace('${src}', src);
        img = img.replace('${alt}', alt);
        return img;
    };
    var position = document.getElementsByClassName("_1cwz")[0];
    if(!position) position = createPosition("_673w");
    var div = $('<div/>', {id: 'showHideButton'});
    var openUrl = GM_getResourceURL('openImg');
    var closeUrl = GM_getResourceURL('closeImg');
    var img = '<img src="${src}" alt="${alt}" height="30" width="30" style="filter: invert(1);">';
    $(div).prepend(createImage(img, openUrl, 'Hide Sidebar'));
    $(position).prepend(div);
    $("#showHideButton").css({
        "background-color": "#0084ff",
        "color": "#FFFFFF",
        "left":60,
        "z-index":1000,
        "border-radius":"1.3em",
        "font-size": "12px",
        //"box-shadow": "0px 0px 16px 0px black",
        "border-style": "none",
        "padding": "6px"
    });
    $("#showHideButton").click(function(){
        var convThreads = document.getElementsByClassName("_1enh")[0];
        if(convThreads.style.display == 'none'){
            convThreads.style.display = 'block';
           $("#showHideButton").html(createImage(img, openUrl, 'Hide Sidebar'));
        }else {
            convThreads.style.display = 'none';
            $("#showHideButton").html(createImage(img, closeUrl, 'Show Sidebar'));
        }
    });
});