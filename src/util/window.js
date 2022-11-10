const get_window_attr = params => {
    var result = [];

    for (let attr in params) {
        result.push(attr)
    }

    return result;
}


module.exports = {
    get_window_attr,
}
