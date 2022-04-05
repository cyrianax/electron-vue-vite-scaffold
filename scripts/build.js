const { resolve } = require('path')
const { build } = require('vite')
const builder = require('electron-builder')

const config = {
  appId: 'com.electron.${name}',
  directories: {
    output: 'releases/${version}'
  },
  files: [
    'packages'
  ],
  win: {
    target: 'nsis'
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true
  },
  linux: {
    target: ['AppImage'],
    category: 'Utility'
  }
}

;(async () => {
  // await build({ 
  //   configFile: resolve(__dirname, '../packages/renderer/vite.config.js')
  // })

  await builder.build({
    // targets: Platform.MAC.createTarget(),
    config
  })
  // .then((result) => {
  //   console.log(JSON.stringify(result))
  // }).catch((error) => {
  //   console.error(error)
  // })

})()
