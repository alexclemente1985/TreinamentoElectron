import { ipcMain, app } from "electron";

// handle -> comunicação bi-direcional
ipcMain.handle("fetch-users", ()=>{
    console.log("buscando usuários...")

    return [
        {id: 1, nome: "Alex"},
        {id: 2, nome: "Sheena"},
        {id: 3, nome: "Liu Kenga"},
        {id: 4, nome: "Shão Tsunga"},
    ]
})

ipcMain.handle("app-version", ()=>{
    return app.getVersion();
})