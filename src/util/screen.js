/**
 * colorDepth
 * @returns number
 */
const get_colorDepth = () => {
    return window.screen.colorDepth;
}

/**
 * 屏幕信息
 * @returns string
 */
const get_screen_size = () => {
    var width = window.screen.width || 0;
    var height = window.screen.height || 0;
    return [width, height].join('x');
}

/**
 * 可用空间的屏幕信息
 * @returns string
 */
const get_availscreen_size = () => {
    var availWidth = window.screen.availWidth || 0;
    var availHeight = window.screen.availHeight || 0;
    return [availWidth, availHeight].join('x');
}

/**
 * 屏幕信息
 * @returns string
 */
const get_availscreen_position = () => {
    var availLeft = window.screen.availLeft || 0;
    var availTop = window.screen.availTop || 0;
    return [availTop, availLeft].join('x');
}

/**
 * 屏幕方向
 * @returns string
 */
const get_orientation = () => {
    return window.screen.orientation ? [window.screen.orientation.type, window.screen.orientation.angle, window.orientation].join('/') : undefined;
}

/**
 * 设备像素比
 * @returns {number}
 */
const get_devicePixelRatio = () => {
    return window.devicePixelRatio;
}

/**
 * 屏幕的像素点
 * @returns {number}
 */
const get_pixelDepth = () => {
    return window.screen.pixelDepth;
}

module.exports = {
    get_pixelDepth,
    get_colorDepth,
    get_screen_size,
    get_availscreen_size,
    get_availscreen_position,
    get_orientation,
    get_devicePixelRatio,
}
