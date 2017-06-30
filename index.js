(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.WeexEnv = global.WeexEnv || {})));
}(this, (function (exports) { 'use strict';

/**
 * @class Env
 * @classdesc
 * Get environment official foramt tool.
 */

function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

function isArray(obj) {
    return _typeof(obj) === 'array' ? true : false
}

function isString(obj) {
    return typeof(obj) === 'string' ? true : false
}

/**
 * Get weex env
 *
 * @private
 * @memberOf Env
 * @function getEnv
 *
 * @example
 * <script>
 * var Env = require('@weex-project/env')
 * module.exports = {
 *     created: function() {
 *         let env = Env.getEnv()
 *         console.log('env = ', env)
 *     }
 * }
 * </script>
 *
 * @return {Object}
 */
function getEnv() {
    return WXEnvironment || {}
}

/**
 * Check in the which one app. You can input a array or string to valid. You also can extend this funciton in your all. For example: Tmall app. When the Tmall appName is 'Tmall' the you can make a wrapper like Env.isTmall().
 *
 * @memberOf Env
 * @function isClient
 *
 * @example
 * <script>
 * var Env = require('@weex-project/env')
 * module.exports = {
 *     created: function() {
 *         const myAppNameArray = ['MY_APP_NAME', 'my_app_name']
 *         const myAppName = 'MY_APP_NAME'
 *
 *         Env.isClient(myAppNameArray)
 *         Env.isClient(myAppName)
 *     }
 * }
 * </script>
 *
 * @param {Array|String} appName App name array. maybe your legacy app is different name
 * @return {Boolean}
 */
function isClient(nameList) {
    nameList = isString(nameList) ? [nameList] : nameList;
    nameList = isArray(nameList) ? nameList : [];

    var appname = getEnv().appName || '';
    return nameList.indexOf(appname) >= 0 ? true : false
}


/**
 * check is Web
 *
 * @memberOf Env
 * @function isWeb
 *
 * @example
 * <script>
 * let Env = require('@weex-project/env')
 * module.exports = {
 *     created: function() {
 *         Env.isWeb()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}     check is web
 */
function isWeb() {
    var platform = getEnv().platform || '';
    return typeof(window) === 'object' && platform === 'Web' ? true : false
}

/**
 * check is iOS
 *
 * @memberOf Env
 * @function isIOS
 *
 * @example
 * <script>
 * let Env = require('@weex-project/env')
 * module.exports = {
 *     created: function() {
 *         Env.isIOS()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}     check is ios
 */
function isIOS() {
    var iosName = 'iOS';
    var platform = getEnv().platform || '';
    var os = getEnv().osName || '';
    return platform === iosName || os === iosName ? true : false
}

/**
 * check is Android
 *
 * @memberOf Env
 * @function isAndroid
 *
 * @example
 * <script>
 * let Env = require('@weex-project/env')
 * module.exports = {
 *     created: function() {
 *         Env.isAndroid()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}     check is android
 */
function isAndroid() {
    var androidName = 'android';
    var platform = getEnv().platform || '';
    var os = getEnv().osName || '';
    return platform.toLowerCase() === androidName || os.toLowerCase() === androidName ? true : false
}

exports.getEnv = getEnv;
exports.isClient = isClient;
exports.isWeb = isWeb;
exports.isIOS = isIOS;
exports.isAndroid = isAndroid;

Object.defineProperty(exports, '__esModule', { value: true });

})));
