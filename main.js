const { app, BrowserWindow } = require('electron')
const http = require('http')
const fs = require('fs')
const path = require('path')

let mainWindow

const server = http.createServer((req, res) => {
  // Serve the Next.js HTML file
  if (req.url === '/') {
    const indexPath = path.join(
      __dirname,
      '.next',
      'server',
      'pages',
      'index.html'
    )
    const indexHtml = fs.readFileSync(indexPath, 'utf-8')
    res.setHeader('Content-Type', 'text/html')
    res.end(indexHtml)
  } else {
    // Handle other routes or assets as needed
    res.statusCode = 404
    res.end('Not Found')
  }
})

server.listen(3000) // Set the port you want to use

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: true,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  mainWindow.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
