const count_truthy = function (data) {
    let result = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i]) {
            result++;
        }
    }

    return result;
}

/**
 * 检测 ie
 * @returns {boolean}
 */
const is_trident = () => {
    const w = window
    const n = navigator

    // The properties are checked to be in IE 10, IE 11 and not to be in other browsers in October 2020
    return (
        count_truthy([
            'MSCSSMatrix' in w,
            'msSetImmediate' in w,
            'msIndexedDB' in w,
            'msMaxTouchPoints' in n,
            'msPointerEnabled' in n,
        ]) >= 4
    )
}

/**
 * 检测 edge
 * @returns {boolean}
 */
const is_EdgeHTML = () => {
    // Based on research in October 2020
    const w = window
    const n = navigator

    return (
        count_truthy(['msWriteProfilerMark' in w, 'MSStream' in w, 'msLaunchUri' in n, 'msSaveBlob' in n]) >= 3 &&
        !is_trident()
    )
}

/**
 * 是否是 chrome 浏览器
 * @returns {boolean}
 */
const is_chrome = () => {
    return !!window.chrome;
}

/**
 * 检测 chromium
 * @returns {boolean}
 */
const is_chromium = () => {
    // Based on research in October 2020. Tested to detect Chromium 42-86.
    const w = window
    const n = navigator

    return (
        count_truthy([
            'webkitPersistentStorage' in n,
            'webkitTemporaryStorage' in n,
            n.vendor.indexOf('Google') === 0,
            'webkitResolveLocalFileSystemURL' in w,
            'BatteryManager' in w,
            'webkitMediaStream' in w,
            'webkitSpeechGrammar' in w,
        ]) >= 5
    )
}

/**
 * 检测 chromium（version ≥ 86）
 * @returns {boolean}
 */
const is_chromium86OrNewer = () => {
    // Checked in Chrome 85 vs Chrome 86 both on desktop and Android
    const w = window

    return (
        count_truthy([
            !('MediaSettingsRange' in w),
            'RTCEncodedAudioFrame' in w,
            '' + w.Intl === '[object Intl]',
            '' + w.Reflect === '[object Reflect]',
        ]) >= 3
    )
}

/**
 * 检测 webkit 内核
 * @returns {boolean}
 */
const is_webkit = () => {
    // Based on research in September 2020
    const w = window
    const n = navigator

    return (
        count_truthy([
            'ApplePayError' in w,
            'CSSPrimitiveValue' in w,
            'Counter' in w,
            n.vendor.indexOf('Apple') === 0,
            'getStorageUpdates' in n,
            'WebKitMediaKeys' in w,
        ]) >= 4
    )
}

/**
 * 检测 webkit 内核（version ≥ 606 (Safari ≥ 12)）
 * @returns {boolean}
 */
const is_webKit606OrNewer = () => {
    // Checked in Safari 9–14
    const w = window

    return (
        count_truthy([
            'DOMRectList' in w,
            'RTCPeerConnectionIceEvent' in w,
            'SVGGeometryElement' in w,
            'ontransitioncancel' in w,
        ]) >= 3
    )
}

/**
 * 检测桌面 safari
 * @returns {boolean}
 */
const is_desksafari = () => {
    const w = window

    return (
        count_truthy([
            'safari' in w, // Always false in Karma and BrowserStack Automate
            !('DeviceMotionEvent' in w),
            !('ongestureend' in w),
            !('standalone' in navigator),
        ]) >= 3
    )
}

module.exports = {
    is_EdgeHTML,
    is_chrome,
    is_chromium,
    is_chromium86OrNewer,
    is_webkit,
    is_webKit606OrNewer,
    is_desksafari
}
