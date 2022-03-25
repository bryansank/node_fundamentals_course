const { app, BrowserWindow } = require('electron');
// app empieza un proceso de armar todo....

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
    });

    mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);