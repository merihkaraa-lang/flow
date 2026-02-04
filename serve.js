const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.argv[2]) || 8000;
const root = process.cwd();

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
  const rawUrl = (req.url || "/").split("?")[0];
  const safePath = path.posix.normalize(rawUrl);
  const requestPath = safePath === "/" ? "/index.html" : safePath;
  const resolvedPath = path.resolve(root, `.${requestPath}`);

  if (!resolvedPath.startsWith(root)) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Geçersiz istek");
    return;
  }

  fs.readFile(resolvedPath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 - Dosya bulunamadı");
      return;
    }

    const ext = path.extname(resolvedPath).toLowerCase();
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`FLOW sunucusu çalışıyor: http://localhost:${port}`);
});
