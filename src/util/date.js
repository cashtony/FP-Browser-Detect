const date_format = (fmt, date) => {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}

/**
 * UTC 相对于当前时区的时间差值（单位为分钟）
 * @returns {boolean}
 */
const get_timezone_offset = () => {
    return new Date().getTimezoneOffset();
}

/**
 * 获得时区
 * @returns {boolean}
 */
const get_timezone = () => {
    return window.Intl.DateTimeFormat().resolvedOptions().timeZone;
}

const get_current_date = () => {
    let date = new Date()
    return date_format("YYYY-mm-dd HH:MM:SS", date)
}

module.exports = {
    get_current_date,
    get_timezone_offset,
    get_timezone
}
