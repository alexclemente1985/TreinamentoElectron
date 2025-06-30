const {app, BrowserWindow, ipcMain} = require("electron/main");
const path = require("node:path");

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        maxWidth: 1000,
        maxHeight: 800,
        minWidth: 500,
        minHeight: 500,
        //Esconder o menu da aplicação
        autoHideMenuBar: true,
        //Cor padrão da aplicação
        backgroundColor: "#CCC",
        //Aplicação sempre na frente de qualquer elemento
        alwaysOnTop: true,
        webPreferences:{
            preload: path.join(__dirname, "preload.js")
        }
    })

    // Criação de janelas filhas (tipo modais)
    /*
    const child = new BrowserWindow({parent: win, modal: false, show: false});

    child.loadURL("https://sujeitoprogramador.com");

    child.once("ready-to-show", ()=> {
        child.show();
    })
    */

    win.loadFile("index.html");
}

app.whenReady().then(()=> {
    ipcMain.handle("ping", ()=> "pong, pong");
    ipcMain.handle("username", (event, name)=> `sujeito programador: ${name}`);
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }

    app.on("activate", ()=>{
        if(BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    })
})

app.on("window-all-closed", ()=>{
    if(process.platform !== "darwin"){
        app.quit();
    }
})