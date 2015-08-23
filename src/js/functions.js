/*
|--------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------
*/

/**
 * Parse an int to a more readable string
 *
 * @param int duration
 * @return string
 */
var parseDuration = function (duration) {
    var min = parseInt(parseInt(duration) / 60); // If the output has miliseconds, it does not matter, modulo is not important
    var sec = duration - 60 * min;

    if(sec < 10) sec = ('0' + sec).slice(-2)

    return min + ':' + sec;
};