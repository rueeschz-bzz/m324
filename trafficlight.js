'use strict';

function trafficLight(color) {
    if (!color) {
        return "OUT OF ORDER";
    }

    switch (color.toLowerCase()) {
        case 'red':
            return "DON'T WALK!";
        case 'orange':
            return "ATTENTION!";
        case 'green':
            return "WALK!";
        default:
            return "INVALID COLOR";
    }
}

module.exports = {
    trafficLight
};
