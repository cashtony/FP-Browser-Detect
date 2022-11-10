const md5 = require('md5');

/**
 * 浏览器是否支持  canvas
 * @returns {boolean}
 */
const is_support_canvas = () => {
    var canvas = document.createElement("canvas");
    canvas.width = 150;
    canvas.height = 50;
    canvas.style.display = "inline";

    if (typeof canvas.getContext === "function" && canvas.getContext('2d')) {
        return true;
    }

    return false;
}

/**
 * 生成 canvas 指纹
 *
 * @returns {number}
 */
const canvas_fingerprint = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(255,0,255)";
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,255,255)";
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    const txt = 'abz190#$%^@£éú';
    ctx.textBaseline = "top";
    ctx.font = '17px "Arial 17"';
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "rgb(255,5,5)";
    ctx.rotate(.03);
    ctx.fillText(txt, 4, 17);
    ctx.fillStyle = "rgb(155,255,5)";
    ctx.shadowBlur = 8;
    ctx.shadowColor = "red";
    ctx.fillRect(20, 12, 100, 5);

    // hashing function
    const src = canvas.toDataURL();
    return md5(src);
}

module.exports = {
    is_support_canvas,
    canvas_fingerprint
}
