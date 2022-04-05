const { resolve } = require('path')
const { app, BrowserWindow, shell } = require('electron')


async function createWindow() {
  const win = new BrowserWindow({
    title: 'Wave',
    webPreferences: {
      preload: resolve(__dirname, '../preload/index.js'),
      nodeIntegration: true,
    }
  })

  app.isPackaged
    ? win.loadFile(resolve(__dirname, '../renderer/dist/index.html'))
    : win.loadURL(`http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`)

  // win.webContents.setWindowOpenHandler(({ url }) => {
  //   if (url.startsWith('https:')) shell.openExternal(url)
  //   return { action: 'deny' }
  // })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
}

app.whenReady().then(createWindow)

