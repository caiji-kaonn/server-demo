// 引入http的模板
const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.listen(7070, '192.168.70.115', () => {
    console.log('服务器已启动，可通过http://192.168.70.115:7070 访问');
})
server.on('request', (req, res) => {
    console.log('呀呀呀，进来了');
    if (req.url.startsWith('/demo') || req.url.startsWith('/hei')) {
        if (req.url.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        fs.readFile('.' + req.url, (err, data) => {
            if (err) throw err;
            res.end(data);
        })
    }
})