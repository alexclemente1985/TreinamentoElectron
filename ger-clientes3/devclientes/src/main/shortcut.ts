import { BrowserWindow, app, globalShortcut } from "electron";

export function createShortcuts(window: BrowserWindow){
    //Envolvendo comandos de atalho com aplicação com foco
    app.on("browser-window-focus", ()=>{

        //Criando teclas de atalho para criação de novo cliente
        globalShortcut.register("CommandOrControl+N",()=>{
            window.webContents.send("new-customer");
        })
    })
    // Para evitar que atalhos funcionem na aplicação caso esta esteja sem foco
    app.on("browser-window-blur", ()=>{
        globalShortcut.unregisterAll()
    })
}