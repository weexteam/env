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
export function getEnv() {
    return WXEnvironment || {}
}

/**
 * Check in the which one app. You can input a array or string to valid. You also can extend this funciton in your all. For example: Tmall app. When the Tmall appName is 'Tmall' the you can make a wrapper like Env.isTmall().
 *
 * @memberOf Env
 * @function isApp
 *
 * @example
 * <script>
 * var Env = require('@weex-project/env')
 * module.exports = {
 *     created: function() {
 *         const myAppNameArray = ['MY_APP_NAME', 'my_app_name']
 *         const myAppName = 'MY_APP_NAME'
 *
 *         Env.isApp(myAppNameArray)
 *         Env.isApp(myAppName)
 *     }
 * }
 * </script>
 *
 * @param {Array|String} appName App name array. maybe your legacy app is different name
 * @return {Boolean}
 */
export function isApp(nameList) {
    nameList = isString(nameList) ? [nameList] : nameList
    nameList = isArray(nameList) ? nameList : []

    const appname = getEnv().appName || ''
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
export function isWeb() {
    const platform = getEnv().platform || ''
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
export function isIOS() {
    const iosName = 'iOS'
    const platform = getEnv().platform || ''
    const os = getEnv().osName || ''
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
export function isAndroid() {
    const androidName = 'android'
    const platform = getEnv().platform || ''
    const os = getEnv().osName || ''
    return platform.toLowerCase() === androidName || os.toLowerCase() === androidName ? true : false
}
