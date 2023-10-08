const {  app, BrowserWindow } = require('electron');

function createWindow() {


    const window = new BrowserWindow({
        width: 1500,
        height: 600,
    });
    window.loadURL('http://localhost:3000/')
}

app.whenReady().then(() => {
    createWindow()
})