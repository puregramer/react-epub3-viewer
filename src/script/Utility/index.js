

/***
 * file name : Utility/index.js
 * description : utility functions
 * create date : 2019-01-10
 * creator : saltgamer
 ***/

import {$debugLog} from '../Globals';

export function $qs(selector) {
    return document.querySelector(selector);
}

export function $qsa(selector) {
    return document.querySelectorAll(selector);
}

export function loadJSON (url) {
    return fetch(url).then(r => r.json());
}

export function loadXML (url) {
    return fetch(url).then(x => x.text());
}

export function getURLParameter(sParam) {
    const sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&');

    for (let i = 0; i < sURLVariables.length; i++) {
        const sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1];
        }
    }
}

export function applyStyle(target, styles) {
    for (let value in styles) {
        target.style[value] = styles[value];
    }

}

export function getUrlOrigin() {
    return window.location.protocol + '//' + window.location.host;
}

export function writeDebugLog(dLog) {
    if (!$debugLog) return;

    $debugLog.innerHTML += dLog;
}
