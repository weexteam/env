# Env
Weex get environment tool.

## how to use
`npm install @weex-project/env --save`

## example

### isWeb
```
const Env = require('@weex-project/env')

// normal browser
Env.isWeb()

// iOS webview
Env.isWeb() && Env.isIOS()

// Android webview
Env.isWeb() && Env.isAndroid()
```

### isApp
```
const Env = require('@weex-project/env')

// is my app
Env.isApp('MY_APP')

// is my app with legacy issues
Env.isApp(['MY_APP', 'MY_APP_LEGACY'])
```

### isIOS
```
const Env = require('@weex-project/env')

// is ios
Env.isIOS()
```

### isAndroid
```
const Env = require('@weex-project/env')

// is android
Env.isAndroid()
```
