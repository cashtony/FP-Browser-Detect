const md5 = require('md5');

/**
 * 获得显卡信息
 * @returns {boolean}
 */
const get_webgl_info = () => {
    try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext('webgl');

        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        return [vendor, renderer]
    } catch (e) {

    }

    return ['', '']
}

const getWebglCanvas = () => {
    var canvas = document.createElement('canvas')
    var gl = null
    try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    } catch (e) { /* squelch */
    }
    if (!gl) {
        gl = null
    }
    return gl
}

const get_webgl_fingerprint = () => {
    var gl
    var fa2s = function (fa) {
        gl.clearColor(0.23, 0.2, 0.121, 1.0)
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LEQUAL)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        return '[' + fa[0] + ', ' + fa[1] + ']'
    }
    var maxAnisotropy = function (gl) {
        var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
        if (ext) {
            var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            if (anisotropy === 0) {
                anisotropy = 2
            }
            return anisotropy
        } else {
            return null
        }
    }

    gl = getWebglCanvas()
    if (!gl) {
        return null
    }
    // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
    // First it draws a gradient object with shaders and convers the image to the Base64 string.
    // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
    // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
    var result = []
    var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
    var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
    var vertexPosBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
    var vertices = new Float32Array([-0.1232, -0.212, 0, 0.4, -0.23, 0, 0, 0.13213, 0.1,])
    // console.log(vertices)
    vertices[0] = -0.4;
    // console.log(vertices.buffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    // console.log(vertices.byteLength);

    vertexPosBuffer.itemSize = 3
    vertexPosBuffer.numItems = 3
    var program = gl.createProgram()
    var vshader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vshader, vShaderTemplate)
    gl.compileShader(vshader)
    var fshader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fshader, fShaderTemplate)
    gl.compileShader(fshader)
    gl.attachShader(program, vshader)
    gl.attachShader(program, fshader)
    gl.linkProgram(program)
    gl.useProgram(program)
    program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
    program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
    gl.enableVertexAttribArray(program.vertexPosArray)
    gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
    gl.uniform2f(program.offsetUniform, 1, 3)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
    // console.log(gl.canvas.toDataURL())
    try {
        result.push(gl.canvas.toDataURL())
    } catch (e) {
        /* .toDataURL may be absent or broken (blocked by extension) */
    }


    return md5(result[0]);
}

module.exports = {
    get_webgl_info,
    get_webgl_fingerprint,
}
