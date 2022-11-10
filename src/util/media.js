const doesMatch = (attr, val) => {
    return matchMedia('(' + attr + ':' + val + ')').matches;
}

/**
 * getColorGamut
 * @returns string
 */
const get_color_gamut = () => {
    const arr = ["rec2020", 'p3', "srgb"];
    for(let attr of arr) {
        if (doesMatch('color-gamut', attr)) {
            return attr;
        }
    }

    return '无';
}

/**
 * get_forced_color
 * @returns string
 */
const get_forced_color = () => {
    const arr = ["active", 'none'];
    for(let attr of arr) {
        if (doesMatch('forced-colors', attr)) {
            return attr;
        }
    }

    return '无';
}

/**
 * getHdrMode
 * @returns string
 */
const get_hdr_mode = () => {
    const arr = ["high", 'standard'];
    for(let attr of arr) {
        if (doesMatch('dynamic-range', attr)) {
            return attr;
        }
    }

    return '无';
}

/**
 * getContrastPreference
 * @returns string
 */
const get_contrast_preference = () => {
    const arr = ["no-preference", 'high', 'more', 'low', 'less', 'forced'];
    for(let attr of arr) {
        if (doesMatch('prefers-contrast', attr)) {
            return attr;
        }
    }

    return '无';
}

/**
 * getColorsInverted
 * @returns string
 */
const get_colors_inverted = () => {
    const arr = ["inverted", 'none'];
    for(let attr of arr) {
        if (doesMatch('inverted-colors', attr)) {
            return attr;
        }
    }

    return '无';
}

module.exports = {
    get_color_gamut,
    get_forced_color,
    get_hdr_mode,
    get_contrast_preference,
    get_colors_inverted,
};
