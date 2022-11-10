/**
 * 来源
 * @returns string
 */
const get_referrer = () => {
    return document.referrer;
}

/**
 * url
 * @returns string
 */
const get_url = () => {
    return {
        "document.URL": document.URL,
        "document.baseURI": document.baseURI,
        "document.documentURI": document.documentURI,
        "document.location.href": document.location.href,
        "window.location": {
            "hash": window.location.hash,
            "host": window.location.host,
            "hostname": window.location.hostname,
            "href": window.location.href,
            "origin": window.location.origin,
            "pathname": window.location.pathname,
            "port": window.location.port,
            "protocol": window.location.protocol,
        },
    };
}

/**
 * url
 * @returns string
 */
const get_domain = () => {
    return document.domain;
}

/**
 * title
 * @returns string
 */
const get_title = () => {
    return `${document.title}/${document.querySelector('title').text}/${document.querySelector('title').innerText}/${document.querySelector('title').innerHTML}`;
}

/**
 * 渲染模式
 * @returns string
 */
const get_compatMode = () => {
    return document.compatMode;
}

/**
 * 网页可见区域大小
 * @returns string
 */
const get_client_size = () => {
    return [document.body.clientWidth, document.body.clientHeight].join('x');
}

/**
 * 网页可见区域大小
 * @returns string
 */
const get_documentElement_client_size = () => {
    return [document.documentElement.clientWidth, document.documentElement.clientHeight].join('x');
}

/**
 * 网页可见区域大小 (包括 边线/滚动条 的宽)
 * @returns string
 */
const get_offset_size = () => {
    return [document.body.offsetWidth, document.body.offsetHeight].join('x');
}

/**
 * 网页正文全文大小（包含滚动内容大小）
 * @returns string
 */
const get_scroll_size = () => {
    return [document.body.scrollWidth , document.body.scrollHeight].join('x');
}

/**
 * 网页被卷去的大小
 * @returns string
 */
const get_scroll_position_size = () => {
    return [document.body.scrollTop , document.body.scrollLeft].join('x');
}

// /**
//  * 网页被卷去的大小
//  * @returns string
//  */
// const get_scroll_position_size = () => {
//     return [window.scrollTop , window.scrollLeft].join('x');
// }

/**
 * 浏览器大小
 * @returns string
 */
const get_browser_size = () => {
    return [window.outerWidth , window.outerHeight].join('x');
}

/**
 * 浏览器大小(真实可用)
 * @returns string
 */
const get_browser_inner_size = () => {
    return [window.innerWidth , window.innerHeight].join('x');
}

/**
 * 浏览器工具栏大小(真实可用)
 * @returns string
 */
const get_browser_tool_size = () => {
    return [window.innerWidth , window.screen.height - window.innerHeight].join('x');
}

/**
 * 检测支持的视频格式
 * @returns {boolean}
 */
const can_play = (type) => {
    function n(t, n) {
        return t.canPlayType(n).replace(/^no$/, "0").replace(/^probably$/, "1").replace(/^maybe$/, "1")
    }
    const video = document.createElement('video');
    if (!!video.canPlayType) {
        return n(video, type) == 1;
    }

    return false;
}

module.exports = {
    can_play,
    get_title,
    get_compatMode,
    get_referrer,
    get_url,
    get_domain,
    get_documentElement_client_size,
    get_client_size,
    get_offset_size,
    get_scroll_size,
    get_scroll_position_size,
    get_browser_size,
    get_browser_inner_size,
    get_browser_tool_size,
}
