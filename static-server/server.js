// Import required modules
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Port number
const PORT = 1800;

// MIME types mapping
const mimeType = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
  '.eot': 'application/vnd.ms-fontobject',
  '.ttf': 'application/font-sfnt'
};

// Create server
http.createServer((req, res) => {

  // Parse requested URL
  const parsedUrl = url.parse(req.url);
  
  // If root URL → List files
  if (parsedUrl.pathname === "/") {

    let filesLink = "<ul>";
    res.setHeader('Content-Type', 'text/html');

    // Read current directory
    const filesList = fs.readdirSync("./");

    filesList.forEach(file => {
      if (fs.statSync("./" + file).isFile()) {
        filesLink += `<li><a href="./${file}">${file}</a></li>`;
      }
    });

    filesLink += "</ul>";
    res.end("<h1>List of Files:</h1>" + filesLink);
  }

  else {

    // Prevent directory traversal
    const sanitizePath = path.normalize(parsedUrl.pathname)
      .replace(/^(\.\.[\/\\])+/, '');

    const pathname = path.join(__dirname, sanitizePath);

    // Check file exists
    if (!fs.existsSync(pathname)) {
      res.statusCode = 404;
      res.end("File Not Found!");
    }
    else {

      // Read file
      fs.readFile(pathname, (err, data) => {

        if (err) {
          res.statusCode = 500;
          res.end("Server Error");
        }
        else {
          // Get file extension
          const ext = path.parse(pathname).ext;

          // Set correct MIME type
          res.setHeader('Content-Type', mimeType[ext] || 'text/plain');

          // Send file content
          res.end(data);
        }
      });
    }
  }

}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});