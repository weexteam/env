import * as mocha from 'mocha'
import { expect } from 'chai'
import pkg from '../package.json'
import testHelper from './testHelper'

import * as Env from '../src/index'

describe(pkg.name, () => {
    beforeEach(() => {
        testHelper.setGlobalEnvironment()
    })

    afterEach(() => {
        testHelper.resetGlobalEnvironment()
    })

    describe('isClient', () => {
        it('should be support input string', () => {
            global.WXEnvironment = {
                appName: 'MY_APP_A'
            }
            expect(Env.isClient('MY_APP_A')).equal(true)
        })
    })

    describe('isWeb', () => {
        it('should be make sure in the normal browser', () => {
            global.window = {}
            global.WXEnvironment = {
                platform: 'Web',
                osName: 'Web'
            }
            expect(Env.isWeb()).equal(true)
        })

        it('should be not browser', () => {
            global.window = {}
            global.WXEnvironment = {
                platform: 'iOS',
                osName: 'iOS'
            }
            expect(Env.isWeb()).equal(false)

            global.window = null
            expect(Env.isWeb()).equal(false)
        })

        it('should be make sure in the android webview', () => {
            global.window = {}
            global.WXEnvironment = {
                platform: 'Web',
                osName: 'Android'
            }
            expect(Env.isWeb()).equal(true)
        })

        it('should be make sure in the ios webview', () => {
            global.window = {}
            global.WXEnvironment = {
                platform: 'Web',
                osName: 'iOS'
            }
            expect(Env.isWeb()).equal(true)
        })

        describe('legacy', () => {
            it('should be make sure in the normal browser', () => {
                global.window = {}
                global.WXEnvironment = {
                    platform: 'Web',
                }
                expect(Env.isWeb()).equal(true)
            })
        })
    })

    describe('isIOS', () => {
        it('should be iOS', () => {
            global.WXEnvironment = {
                platform: 'iOS',
            }
            expect(Env.isIOS()).equal(true)
        })

        it('should be iOS get from osName', () => {
            global.WXEnvironment = {
                osName: 'iOS'
            }
            expect(Env.isIOS()).equal(true)
        })
    })

    describe('isAndroid', () => {
        it('should be Android', () => {
            global.WXEnvironment = {
                platform: 'Android',
            }
            expect(Env.isAndroid()).equal(true)
        })

        it('should be Android get from osName', () => {
            global.WXEnvironment = {
                osName: 'Android'
            }
            expect(Env.isAndroid()).equal(true)
        })

        describe('legacy', () => {
            it('should be Android', () => {
                global.WXEnvironment = {
                    platform: 'android',
                }
                expect(Env.isAndroid()).equal(true)
            })
        })
    })
})
