import JSBridge from 'javascript-bridge'
JSBridge.first()

JSBridge.registerHandler('fun-name', (res) => { // H5注册方法供客户端调用
    const result = JSON.parse(res)
    if (result.success === true) {                     
       // do something                                          
    } else {
       // do something 
    }
})

JSBridge.callHandler('get-info', {}) // H5调用客户端注册的方法