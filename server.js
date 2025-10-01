const express = require('express');
const app = express();

// 根路径响应，包含GitHub仓库链接
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <h1>服务器已运行</h1>
        <p>查看项目源码：<a href="https://github.com/zwy2673976185-design/nrgx" target="_blank">GitHub仓库</a></p>
      </body>
    </html>
  `);
});

// 启动服务（Vercel会自动识别端口）
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
