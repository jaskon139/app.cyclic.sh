// 引入 createVLESSServer 函数
const { createVLESSServer } = require("@3kmfi6hp/nodejs-proxy");
// 定义端口和 UUID
const port = 3000;
const uuid = "d342d11e-d424-4583-b36e-524ab1f0afa4";

// 调用函数启动 VLESS 服务器
createVLESSServer(port, uuid);
