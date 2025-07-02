import { app ,ipcMain } from "electron";
import PouchDB from "pouchdb";
import path from 'node:path';
import fs from 'node:fs';
import {Customer, NewCustomer} from "../shared/types/ipc";

let dbPath;

if(process.platform === "darwin"){
    dbPath = path.join(app.getPath("appData"), "devclientes", "my_db");
} else{
    dbPath = path.join(app.getPath("userData"), "my_db");
}

//Verificação e criação de diretório caso não exista
const dbDir = path.dirname(dbPath);

if(!fs.existsSync(dbDir)){
    fs.mkdirSync(dbDir, {recursive: true})
}

//Inicializar o db
const db = new PouchDB<Customer>(dbPath)

//Adição de cliente no banco
async function addCustomer(doc: NewCustomer){
    console.log(doc)
}
ipcMain.handle("add-customer", async (event, doc:Customer)=>{
    const result = await addCustomer(doc);
    return result;
})