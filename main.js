const {app, BrowserWindow} = require('electron');
const url = require("url");
const path = require("path");

let mainWindow;

const urlFrom = (urlObject) => String(Object.assign(new URL(), urlObject))

function createWindow(){
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      nodeIntegration: true
    },
    //frameless options
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#2f3241',
      symbolColor: '#74b1be'
    }

    //macOs titleBarStyle option
    //titleBarStyle: 'hiddenInset'
    //titleBarStyle: 'customButtonsOnHover', frame: false
  });

  mainWindow.loadFile( path.join(__dirname, `/dist/electron-app/index.html`))

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed',function(){
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
  if(process.platform !== 'darwin') app.quit()
})

app.on('activate', function(){
  if(mainWindow === null) createWindow()
})
