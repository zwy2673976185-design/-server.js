const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('服务器已运行！当前时间：' + new Date().toLocaleString());
});

app.listen(port, () => {
  console.log(`服务器启动在端口 ${port}`);
});
