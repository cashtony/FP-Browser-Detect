/**
 * 通过 stun 协议 获得内网外 ip
 * @param callback
 */
function get_ips(callback) {
    var ip_dups = {};

    //compatibility for firefox and chrome
    var RTCPeerConnection = window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection;
    var useWebKit = !!window.webkitRTCPeerConnection;

    //bypass naive webrtc blocking using an iframe
    if (!RTCPeerConnection) {
        //NOTE: you need to have an iframe in the page right above the script tag
        //
        //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
        //<script>...getIPs called in here...
        //
        var win = window.iframe.contentWindow;
        RTCPeerConnection = win.RTCPeerConnection
            || win.mozRTCPeerConnection
            || win.webkitRTCPeerConnection;
        useWebKit = !!win.webkitRTCPeerConnection;
    }

    //minimal requirements for data connection
    var mediaConstraints = {
        optional: [{RtpDataChannels: true}]
    };

    var servers = {
        iceServers: [{
            urls: [
                "stun:stun.l.google.com:19302",
                "stun:stun2.l.google.com:19302",
                "stun:stun.services.mozilla.com",
            ]
        }]
    };

    //construct a new RTCPeerConnection
    var pc = new RTCPeerConnection(servers, mediaConstraints);

    const is_privite_ip = (ip) => {
        // https://stackoverflow.com/questions/30674845/regex-how-to-match-ip-address-in-rfc1918-private-ipv4-address-ranges-in-python
        const ip_regex = /^(?:10|127|172\.(?:1[6-9]|2[0-9]|3[01])|192\.168)\..*/g
        const result = ip_regex.exec(ip);

        return Array.isArray(result) && result.length > 0;
    }

    const result = {
        privite_ip_addr: null,
        public_ip_addr: null,
    };

    function handleCandidate(candidate) {
        console.log(candidate)
        try {
            //match just the IP address
            var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
            const exec_result = ip_regex.exec(candidate);
            if (!exec_result || exec_result.length <= 0) {
                return;
            }
            var ip_addr = exec_result[1];
            const is_privite = is_privite_ip(ip_addr);

            if (is_privite) {
                result.privite_ip_addr = ip_addr;
            } else {
                result.public_ip_addr = ip_addr;
            }

            //remove duplicates
            if (ip_dups[ip_addr] === undefined)
                callback(result);

            ip_dups[ip_addr] = true;
        } catch (e) {

        }
    }

    //listen for candidate events
    pc.onicecandidate = function (ice) {

        //skip non-candidate events
        if (ice.candidate) {
            handleCandidate(ice.candidate.candidate);
        }
    };

    //create a bogus data channel
    pc.createDataChannel("");

    //create an offer sdp
    pc.createOffer(function (result) {
        //trigger the stun server request
        pc.setLocalDescription(result, function () {
        }, function () {
        });

    }, function () {
    });

    //wait for a while to let everything done
    setTimeout(function () {
        //read candidate info from local description
        var lines = pc.localDescription.sdp.split('\n');
        lines.forEach(function (line) {
            if (line.indexOf('a=candidate:') === 0)
                handleCandidate(line);
        });
    }, 3000);
}

function tryCatchExecute(fun, arg) {
    try {
        return fun && fun.apply(window, arg || []) || '';
    } catch (e) {
        {
            console.info('error function: ', fun.toString(), '\ndebug error: ', e);
        }

        return '';
    }
}

function getLocalIp(cb) {
    try {
        var getExternalIP = new Promise(function (resolve, reject) {
            try {
                var handleCandidate = function handleCandidate(candidate) {
                    // match just the IP address
                    var result = ipRegex.exec(candidate);
                    if (!result) return;
                    var ipAddr = result[1];

                    if (ipAddr === '0.0.0.0') {
                        return;
                    } // remove duplicates


                    if (ipDups[ipAddr] === undefined) {
                        ips.push(ipAddr);
                    }

                    ipDups[ipAddr] = true;
                }; // listen for candidate events


                // compatibility for firefox and chrome
                var RTCPeerConnection = global.RTCPeerConnection || global.mozRTCPeerConnection || global.webkitRTCPeerConnection; // let useWebKit = !!global.webkitRTCPeerConnection;
                // bypass naive webrtc blocking using an iframe

                if (!RTCPeerConnection) {
                    resolve('');
                    return;
                }

                var ips = [];
                var ipDups = {}; // minimal requirements for data connection

                var mediaConstraints = {
                    optional: [{
                        RtpDataChannels: true
                    }]
                };
                var servers = {
                    iceServers: [{
                        // urls: 'stun:stun.services.mozilla.com'
                        urls: [
                            "stun:stun.l.google.com:19302",
                            "stun:stun2.l.google.com:19302",
                            "stun:stun.services.mozilla.com",
                        ]
                    }]
                }; // construct a new RTCPeerConnection

                var pc = new RTCPeerConnection(servers, mediaConstraints);
                var ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;

                pc.onicecandidate = function (ice) {
                    // skip non-candidate events
                    if (ice.candidate) {
                        handleCandidate(ice.candidate.candidate);
                    }
                }; // create a bogus data channel


                pc.createDataChannel('');

                var noop = function noop() {}; // create an offer sdp


                tryCatchExecute(function () {
                    // safari11, 12.
                    pc.createOffer().then(function (result) {
                        // trigger stun server request
                        pc.setLocalDescription(result, noop, noop);
                    }, noop).catch(function (e) {
                        console.error(e);
                    });
                });
                tryCatchExecute(function () {
                    // safari11, chrome49.
                    var createOfferPromise = pc.createOffer(function (result) {
                        // trigger stun server request
                        pc.setLocalDescription(result, noop, noop);
                    }, noop);

                    if (createOfferPromise.catch) {
                        createOfferPromise.catch(function (e) {
                            console.error(e);
                        });
                    }
                }); // wait for a while to let everything done

                var ctr = 0;
                var h = setInterval(function () {
                    // read candidate info from local description
                    try {
                        console.log(pc.localDescription.sdp)
                        var lines = pc.localDescription.sdp.split('\n');
                        lines.forEach(function (line) {
                            if (line.indexOf('a=candidate:') === 0 || line.indexOf('c=IN') === 0) handleCandidate(line);
                        });

                        if (ips.length > 0 || ++ctr > 2) {
                            resolve(ips.join(','));
                            clearInterval(h);
                        }
                    } catch (_) {
                        resolve(ips.join(','));
                        clearInterval(h);
                    }
                }, 1000);
            } catch (e) {
                console.log(e);

                cb('');
            }
        });
        getExternalIP.then(function (ip) {
            cb(ip);
        }).catch(function (e) {
            console.error(e);
        });
    } catch (e) {
        cb(null);
    }
}

module.exports = {
    get_ips,
    getLocalIp
}
