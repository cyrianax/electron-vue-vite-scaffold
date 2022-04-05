const { resolve } = require('path')
const { spawn } = require('child_process')
const { createServer } = require('vite')
const electron = require('electron')

;(async () => {
  const server = await createServer({
    configFile: resolve(__dirname, '../packages/renderer/vite.config.js'),
  })
  await server.listen()
  server.printUrls()

  const address = server.httpServer.address()
  const env = Object.assign(process.env, {
    VITE_DEV_SERVER_HOST: address.address,
    VITE_DEV_SERVER_PORT: address.port,
  })

  spawn(electron, ['.'], { stdio: 'inherit', env })
  

})()