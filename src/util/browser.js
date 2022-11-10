/**
 * 浏览器是否支持 cookie
 * @returns {boolean}
 */
const is_support_cookie = () => {
    try {
        if (!!navigator.cookieEnabled) {
            let status = false;

            try {
                document.cookie = "cookietest=1; SameSite=Strict;";
                status = document.cookie.indexOf("cookietest=") !== -1;
                document.cookie = "cookietest=1;";
                return status;
            } catch (e) {
                return false;
            }
        }
    } catch (e) {
        return false;
    }
}

/**
 * 浏览器是否支持 session
 * @returns {boolean}
 */
const is_support_session = () => {
    try {
        return !!window.sessionStorage;
    } catch (e) {
        return false;
    }
}

/**
 * 浏览器是否支持 indexdb
 * @returns {boolean}
 */
const is_support_indexdb = () => {
    try {
        return !!window.indexedDB;
    } catch (e) {
        return false;
    }
}

/**
 * 浏览器是否支持 localStorage
 * @returns {boolean}
 */
const is_support_localStorage = () => {
    try {
        return !!window.localStorage;
    } catch (e) {
        return false;
    }
}

/**
 * 历史记录长度
 * @returns {boolean}
 */
const get_history_length = () => {
    return window.history.length;
}

/**
 * 获得时区
 * @returns {boolean}
 */
const get_performance_type = () => {
    const performance = window.performance;
    try {
        return performance.navigation.type.toString()
    } catch (e) {

    }

    return false;
}

/**
 * 是否是 selenium
 * @returns {boolean}
 */
function has_selenium() {
    for (let attr of [
        'webdriver',
        '_Selenium_IDE_Recorder',
        'callSelenium',
        '_selenium'
    ]) {
        if (attr in window) {
            return true;
        }
    }

    for (let attr of [
        '__webdriver_script_fn',
        '__driver_evaluate',
        '__selenium_evaluate',
        '__fxdriver_evaluate',
        '__driver_unwrapped',
        '__webdriver_unwrapped',
        '__selenium_unwrapped',
        '__fxdriver_unwrapped',
        '__webdriver_script_func',
    ]) {
        if (attr in document) {
            return true;
        }
    }

    var docElement = document.documentElement;
    for (let attr of [
        'selenium',
        'webdriver',
        'driver',
    ]) {
        if (docElement.getAttribute(attr) !== null) {
            return true;
        }
    }

    return false;
}

/**
 * 是否是 Playwright
 *
 * @returns {boolean}
 */
function has_playwright() {
    for (let attr of [
        "_playwrightRecorderSetSelector",
        "_playwrightResume",
        "_playwrightRecorderPerformAction",
        "__playwright_binding_call__",
        "_playwrightRecorderRecordAction",
        "_playwrightRecorderState",
        "_playwrightRefreshOverlay"
    ]) {
        if (attr in window) {
            return true;
        }
    }

    return false;
}

/**
 * 是否是 PhantomJS
 *
 * @returns {boolean}
 */
function has_phantomJS() {
    for (let attr of [
        "callPhantom",
        "_phantom",
        "phantom",
    ]) {
        if (attr in window) {
            return true;
        }
    }

    return false;
}

/**
 * 是否是 NightmareJS
 *
 * @returns {boolean}
 */
function has_nightmareJS() {
    for (let attr of [
        "__nightmare",
    ]) {
        if (attr in window) {
            return true;
        }
    }

    return false;
}

/**
 * 是否使用了 webdriver
 *
 * @returns {boolean}
 */
function use_webdriver() {
    for (let attr of [
        "cdc_adoQpoasnfa76pfcZLmcfl_Array",
        "cdc_adoQpoasnfa76pfcZLmcfl_Promise",
        "cdc_adoQpoasnfa76pfcZLmcfl_Symbol",
    ]) {
        if (attr in window) {
            return true;
        }
    }

    for (let attr of [
        "$cdc_asdjflasutopfhvcZLmcfl_",
        "$chrome_asyncScriptInfo",
    ]) {
        if (attr in document) {
            return true;
        }
    }

    return false;
}

module.exports = {
    get_history_length,
    is_support_cookie,
    is_support_session,
    is_support_indexdb,
    is_support_localStorage,
    get_performance_type,
    has_selenium,
    has_playwright,
    has_phantomJS,
    has_nightmareJS,
    use_webdriver,
}
