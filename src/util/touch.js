/**
 * 浏览器是否支持 touch 事件
 * @returns {boolean}
 */
const is_support_touch = () => {
    let status = false;

    try {
        document.createEvent("TouchEvent");
        status = true;
    } catch (e) {
    }

    return status || "ontouchstart" in window;
}

/**
 * 当前设备能够支持的最大同时触摸的点数
 * @returns {number}
 */
const get_maxTouchPoints = () => {
    return navigator.maxTouchPoints;
}

module.exports = {
    is_support_touch,
    get_maxTouchPoints,
}
