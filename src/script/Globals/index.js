/***
 * file name : Globals/index.js
 * description : Globals class
 * create date : 2019-01-11
 * creator : saltgamer
 ***/

export let $PPaper = document.querySelector('#PPaper');

export const $ShowingPageInDOM = 6;
export const $ArrowScaleFactor = 30;
export const $PreloadCount = 4;
export const $PageStringBuffer = 10;



export let $ContentsURL = null;
export function setContentsURL(url) {
    $ContentsURL = url;
}

export let $Epub = null;
export function setEpub(epub) {
    $Epub = epub;
}

export const $Pages = new Map();
export const $CurrentPageRange = new Map();

export let $DummyPage = null;
export function setDummyPage(dummyPage) {
    $DummyPage = dummyPage;
}

export let $Flip = null;
export function setFlip(flip) {
    $Flip = flip;
}

export let $Responsive = null;
export function setResponsive(responsive) {
    $Responsive = responsive;
}

export let $Resize = null;
export function setResize(resize) {
    $Resize = resize;
}

export let $Thumbnail = null;
export function setThumbnail(thumbnail) {
    $Thumbnail = thumbnail;
}

export let $CurrentLoading = true;
export function setCurrentLoading(loading) {
    $CurrentLoading = loading;
}

// export let $CurrentMode = 'single';
export let $CurrentMode = 'double';
export function setCurrentMode(mode) {
    $CurrentMode = mode;
}

export let $CurrentPage = 1;
export function setCurrentPage(page) {
    $CurrentPage = page;
}

export let $PrevArrow = null;
export function setPrevArrow(arrow) {
    $PrevArrow = arrow;
}

export let $NextArrow = null;
export function setNextArrow(arrow) {
    $NextArrow = arrow;
}

export let $debugLog = null;
export function setDebugLog(dLog) {
    $debugLog = dLog;
}





