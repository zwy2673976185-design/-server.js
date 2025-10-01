const express = require('express');
const app = express();

// 根路径响应（已填入你的GitHub仓库链接，页面标题标注你的项目名）
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <body>
        <h1>nrgx项目 - 服务器已运行</h1> <!-- 标题添加你的项目名，便于识别 -->
        <p>查看项目源码：<a href="https://github.com/zwy2673976185-design/nrgx" target="_blank">GitHub仓库（zwy2673976185-design/nrgx）</a></p> <!-- 已填入你的专属仓库链接 -->
      </body>
    </html>
  `);
});

// 启动服务（Vercel自动识别端口，本地测试默认3000端口，无需修改）
app.listen(process.env.PORT || 3000, () => {
  console.log('nrgx项目 Server is running'); // 日志标注项目名，便于调试
});
