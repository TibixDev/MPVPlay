// ==UserScript==
// @name         YouTube MPV Player
// @version      0.1
// @description  This little script opens any YouTube video in MPV with a simple button click
// @author       TibixDev
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        GM_addStyle
// ==/UserScript==

(async function () {
    'use strict';
    console.log("[YTMPV] YouTube MPV player script loaded");

    function setButtonInterval() {
        return setInterval(() => {
            if (document.querySelector("#info>#menu-container>#menu>ytd-menu-renderer>#top-level-buttons-computed>ytd-toggle-button-renderer")) {
                console.log("[YTMPV] Menu container found, executing...");
                addMpvButton()
            }
        }, 1000);
    }

    // let waitForButtons = setButtonInterval();
    let waitForButtons = null;

    let location = window.location.href;;
    if (location.match(/^https:\/\/www\.youtube\.com\/watch\?v=([^&]*)/)) {
        waitForButtons = setButtonInterval();
    }

    let waitForUrlChange = setInterval(() => {
        if (location !== window.location.href && window.location.href.includes("watch?v=") && !waitForButtons) {
            console.log("[YTMPV] Video URL detected, toggling waitForButtons...");
            waitForButtons = setButtonInterval();
            location = window.location.href;
        }
    }, 2000);

    function addMpvButton() {
        clearInterval(waitForButtons);
        waitForButtons = null;
        const ytButtons = document.querySelector("#info>#menu-container>#menu>ytd-menu-renderer>#top-level-buttons-computed");
        const ytButton = document.createElement("button");
        ytButton.id = "mpv-button";
        const mpvBtnStyle = `
        #mpv-button {
            color: white;
            cursor: pointer;
            background-color: #043565;
            border-radius: 10px;
            margin-left: 10px;
            margin-right: 10px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: var(--ytd-tab-system-font-size);
            font-weight: var(--ytd-tab-system-font-weight);
            font-family: Roboto, Arial, sans-serif;
            border: 0;
            transition: all 0.2s ease-in-out;
        }
    
        #mpv-button:hover {
            background-color: #0a6dab;
        }`
    
        const styleElem = document.createElement("style");
        if (styleElem.styleSheet) {
            styleElem.styleSheet.cssText = mpvBtnStyle;
        } else {
            styleElem.appendChild(document.createTextNode(mpvBtnStyle));
        }
        document.getElementsByTagName('head')[0].appendChild(styleElem);
        // ytButton.style.cssText = mpvBtnStyle;
        ytButton.textContent = "▶ MPV";
        ytButton.addEventListener("click", () => {
            document.querySelector("video").pause();
            document.location = "mpv://" + document.location.href;
            ytButton.textContent = "⌛ Opening...";
            ytButton.style.cssText = "background-color: #0a6dab;";
            setTimeout(() => {
                ytButton.textContent = "▶ MPV";
                ytButton.style.cssText = "";
            }, 3000);
        });
    
        ytButtons.appendChild(ytButton);
        console.log("[YTMPV] MPV button added");
        console.log(ytButton, ytButtons);
    }
})();