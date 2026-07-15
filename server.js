const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8000;
const DATA_FILE = path.join(__dirname, 'data.json');
const BACKUP_FILE = path.join(__dirname, 'data.backup.json');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // API endpoint: Save data
    if (pathname === '/api/save-data' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                
                // Create backup
                if (fs.existsSync(DATA_FILE)) {
                    const oldData = fs.readFileSync(DATA_FILE, 'utf8');
                    fs.writeFileSync(BACKUP_FILE, oldData);
                }
                
                // Write new data
                fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
                
                // Count items
                let itemCount = 0;
                data.groups.forEach(group => {
                    group.departments.forEach(dept => {
                        itemCount += dept.subcategories.length;
                    });
                });
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    timestamp: new Date().toISOString(),
                    itemCount: itemCount,
                    message: 'Data saved successfully'
                }));
            } catch (error) {
                console.error('Save error:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: false,
                    error: error.message
                }));
            }
        });
        return;
    }

    // Static file serving
    let filePath = pathname === '/' ? '/index.html' : pathname;
    filePath = path.join(__dirname, filePath);
    
    const ext = path.extname(filePath);
    const contentTypeMap = {
        '.html': 'text/html',
        '.json': 'application/json',
        '.js': 'application/javascript',
        '.css': 'text/css'
    };
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentTypeMap[ext] || 'application/octet-stream' });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}/`);
});
