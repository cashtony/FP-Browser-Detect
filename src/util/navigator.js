/**
 * 浏览器插件
 * @returns string
 */
export const all_plugins = () => {
    const plugins = navigator.plugins;
    const result = [];
    if (plugins.length > 0) {
        for (let item of plugins) {
            result.push([item.name])
        }
    } else {
        return ['无'];
    }
    return result
}

/**
 * 浏览器支持的全部mimeTypes
 * @returns string
 */
export const all_mimeTypes = () => {
    const plugins = navigator.mimeTypes;
    const result = [];
    if (plugins.length > 0) {
        for (let item of plugins) {
            result.push([{
                type: item.type,
                description: item.description,
                suffixes: item.suffixes,
            }])
        }
    } else {
        return ['无'];
    }
    return result
}

/**
 * 浏览器支持语言
 * @returns string
 */
export const all_languages = () => {
    return navigator.languages.join(',')
}

/**
 * 用户偏好语言
 * @returns string
 */
export const get_language = () => {
    return navigator.language
}

/**
 * platform
 * @returns string
 */
export const get_platform = () => {
    return navigator.platform
}

/**
 * userAgent
 * @returns string
 */
export const get_userAgent = () => {
    return navigator.userAgent
}

/**
 * userAgentData
 * @returns string
 */
export const get_userAgentData = () => {
    return navigator.userAgentData;
}

/**
 * 供应商
 * @returns {string}
 */
export const get_vendor = () => {
    return navigator.vendor
}

/**
 * 是否有 webdriver
 * @returns {boolean}
 */
export const has_webdriver = () => {
    return 'webdriver' in navigator
}

/**
 * webdriver 的值
 * @returns {boolean}
 */
export const get_webdriver = () => {
    return navigator.webdriver
}

/**
 * 机器内存
 * @returns {boolean}
 */
export const get_deviceMemory = () => {
    return navigator.deviceMemory
}

/**
 * 处理器数量
 * @returns {boolean}
 */
export const get_hardwareConcurrency = () => {
    return navigator.hardwareConcurrency
}

/**
 * Do Not Track
 *
 * @returns {boolean}
 */
export const get_doNotTrack = () => {
    return navigator.doNotTrack;
}

/**
 * Do Not Track
 *
 * @returns {boolean}
 */
export const get_online = () => {
    return navigator.onLine;
}

/**
 * javaEnabled
 *
 * @returns {boolean}
 */
export const get_javaEnabled = () => {
    return navigator.javaEnabled();
}

/**
 * pdfViewerEnabled
 *
 * @returns {boolean}
 */
export const get_pdfViewerEnabled = () => {
    return navigator.pdfViewerEnabled;
}

let loop_num = 0;
let deep_num = 0;
export const get_navigator_attr = params => {
    var result = {};

    for (let attr in params) {
        loop_num += 1;

        if (loop_num > 512) {
            return result;
        }

        let current = params[attr];

        if (typeof current === "function") {

        } else if (typeof current === "object") {
            deep_num += 1;

            if (deep_num > 5) {
                continue;
            }

            result[attr] = get_navigator_attr(current);
            deep_num -= 1;
        } else {
            result[attr] = current;
        }
    }

    return result;
}
