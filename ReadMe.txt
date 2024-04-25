Usage in Node.js
index.js

// 引入 createVLESSServer 函数
const { createVLESSServer } = require("@3kmfi6hp/nodejs-proxy");
// 定义端口和 UUID
const port = 3001;
const uuid = "d342d11e-d424-4583-b36e-524ab1f0afa4";

// 调用函数启动 VLESS 服务器
createVLESSServer(port, uuid);
package.json

{
  "name": "nodejs-proxy-example",
  "version": "1.0.0",
  "description": "An example of @3kmfi6hp/nodejs-proxy",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "3Kmfi6HP",
  "license": "MIT",
  "dependencies": {
    "@3kmfi6hp/nodejs-proxy": "latest"
  }
}
npm install
npm start # 或者您可以使用 node index.js
环境变量
环境变量	描述	默认值
PORT	代理服务的端口号	7860
UUID	代理服务的 UUID	d342d11e-d424-4583-b36e-524ab1f0afa4
