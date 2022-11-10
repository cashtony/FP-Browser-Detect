function handleDeviceMotion(e) {
    var acceleration = e.accelerationIncludingGravity;

    // console.log(acceleration);

    if (acceleration) {
        lastXG = acceleration.x || 0;
        lastYG = acceleration.y || 0;
        lastZG = acceleration.z || 0;
    }

    acceleration = e.acceleration;

    if (acceleration) {
        lastX = acceleration.x || 0;
        lastY = acceleration.y || 0;
        lastZ = acceleration.z || 0;
    }

    var rotate = e.rotationRate;

    if (rotate) {
        lastA = rotate.alpha || 0;
        lastB = rotate.beta || 0;
        lastG = rotate.gamma || 0;
    }

    if (gotGyoTime === 0 && !(lastX === 0 && lastY === 0 && lastZ === 0)) {
        gotGyoTime = getTimestamp();
    }
}
