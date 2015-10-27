// ==UserScript==
// @name         Youtube SCPD Shortcuts
// @namespace    http://aduffy.org
// @version      0.2.0
// @description  Adds YT-like keyboard shortcuts for SCPD videos (Stanford).
// @author       Andrew Duffy <root@aduffy.org>
// @match        https://mvideox.stanford.edu/*
// @match        https://class.coursera.org/*
// @grant        none
// ==/UserScript==

var paused = false;

document.onkeydown = function (key){
    var video = document.getElementsByTagName("video")[0]; //lecture video element

    if (key.which == 75) { // k - Toggle play/pause
        if (!video.paused)
            video.pause();
        else
            video.play();
    }
    
    /* Fast forward/rewind */
    if (key.which == 74) // j - Back 10 seconds
        video.currentTime -= 10;
    if (key.which == 76) // l (lowercase L) - Forward 10 seconds
        video.currentTime += 10;
    
    /* Faster forward/rewind */
    if (key.which == 72) // h - Jump backward 30 seconds
        video.currentTime -= 30;
    if (key.which == 186) // ; - Jump forward 30 seconds
        video.currentTime += 30;
    
    /* Jump to time */
    if (key.which == 71) // g - Jump to time
        video.currentTime = getSecondsFromTime(prompt("Seek to Time (in seconds): "));
}

function getSecondsFromTime(timeStr){
    var splitTime = timeStr.split(":");
    return parseInt(splitTime[0])*60  + parseInt(splitTime[1]);
}

