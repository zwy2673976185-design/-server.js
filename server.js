cat > server.js <<'EOF'
const http = require('http');
const https = require('https');
const fs   = require('fs');
const port = process.env.PORT || 3000;

// 优先读本地 nitian.html，没有就回退到 GitHub 最新
function getHtml(res){
  const localPath = './nitian.html';
  if(fs.existsSync(localPath)){
    // 本地有文件，直接读
    fs.createReadStream(localPath).pipe(res);
  }else{
    // 本地没有，实时拉 GitHub 最新
    https.get('https://raw.githubusercontent.com/zwy2673976185-design/Auto-Update/main/nitian.html',(up)=>up.pipe(res));
  }
}

http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  if(req.url==='/'){
    getHtml(res);
  }else{
    res.end('Hello Codespaces!');
  }
}).listen(port,()=>console.log(`→ http://localhost:${port}`));
EOF
