import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI, ElectronAPI } from '@electron-toolkit/preload'
import { Customer, NewCustomer } from '../shared/types/ipc'

declare global {
  export interface Window{
    electron: ElectronAPI;
    api: typeof api;
  }
}
// Custom APIs for renderer
const api = {
  //recebe uma função que se desejável de ser disparada pelo ipcRenderer
  // útil para acionar páginas via traymenu
  onNewCustomer: (callback: ()=>void)=>{
    ipcRenderer.on("new-customer", callback)

    return () => {
      ipcRenderer.off("new-customer", callback)
    }
  },
  //INVOKE -> permite enviar e receber informações
  fetchUsers: ()=> {
    return ipcRenderer.invoke("fetch-users")
  },

  //Ponte para adição de clientes
  addCustomer: (doc: NewCustomer): Promise<void | PouchDB.Core.Response>=>{
    return ipcRenderer.invoke("add-customer", doc)
  },

  //Ponte para busca de clientes
  fetchAllCustomers: (): Promise<Customer[]> => ipcRenderer.invoke("fetch-all-customers"),

  //Ponte para busca de clientes por ID
  fetchCustomerByID: (docID: string): Promise<Customer> => ipcRenderer.invoke("fetch-customer-id",docID),

  //Ponte para remoção de cliente
  deleteCustomer: (docID: string) => ipcRenderer.invoke("delete-customer", docID)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
