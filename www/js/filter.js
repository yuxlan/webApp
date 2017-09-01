angular.module('starter.filter', [])
.filter('detailTextFirst', function () {
    return function (str) {
        if (str.length >= 1) {
            return str.substr(0, 1);
        }
        return str;
    }
})
.filter('detailTextOthor', function () {
    return function (str) {
        if (str.length >= 1) {
            return str.substr(1, str.length+1);
        }
        return str;
    }
});