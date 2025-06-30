const { contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("api", {
    ping: ()=> ipcRenderer.invoke("ping"),
    getName: (name)=> ipcRenderer.invoke("username", name)
})