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
 * 获得时区
 * @returns {boolean}
 */
const get_timezone = () => {
    return new Date().getTimezoneOffset();
}

module.exports = {
    is_support_cookie,
    is_support_session,
    is_support_indexdb,
    is_support_localStorage,
    get_timezone,
}
