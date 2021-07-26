


const { app, BrowserWindow } = require('electron')



app.whenReady().then(() => {
  let win = new BrowserWindow({
    width: 900,
    height: 600,
		frame: false,
		resizable: false,
		hasShadow:true,
		icon:'img/icon.png'
  })
  win.loadFile('index.html')
})
