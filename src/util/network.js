/**
 * 是否支持网络类型
 * @returns string
 */
const is_support_network = () => {
    return !!navigator.connection;
}

/**
 * 网络有效类型
 * @returns string
 */
const get_effectiveType = () => {
    return navigator.connection.effectiveType;
}

/**
 * 网络类型
 * @returns string
 */
const get_type = () => {
    return navigator.connection.type;
}

/**
 * 网络下行速度
 * @returns string
 */
const get_downlink = () => {
    return navigator.connection.downlink;
}

/**
 * 最大网络下行速度
 * @returns string
 */
const get_downlinkMax = () => {
    return navigator.connection.downlinkMax;
}

/**
 * 估算的往返时间
 * @returns string
 */
const get_rtt = () => {
    return navigator.connection.rtt;
}


/**
 * 打开/请求数据保护模式
 * @returns string
 */
const get_saveData = () => {
    return navigator.connection.saveData;
}

/**
 * 网络状态是否变更
 * @returns string
 */
const get_onchange = () => {
    return navigator.connection.onchange;
}

module.exports = {
    is_support_network,
    get_type,
    get_effectiveType,
    get_downlink,
    get_downlinkMax,
    get_rtt,
    get_saveData,
    get_onchange,
}
