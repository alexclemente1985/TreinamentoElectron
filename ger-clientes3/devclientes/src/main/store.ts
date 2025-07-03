import { app ,ipcMain } from "electron";
import PouchDB from "pouchdb";
import path from 'node:path';
import fs from 'node:fs';
import {Customer, NewCustomer} from "../shared/types/ipc";
import {randomUUID} from "node:crypto"

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
async function addCustomer(doc: NewCustomer) : Promise<PouchDB.Core.Response | void>{
    const id = randomUUID();

    const data: Customer = {
        ...doc,
        _id: id
    }

    return db.put(data)
    .then(response => response)
    .catch(err=> console.log("ERRO NO CADASTRO ", err))
}
ipcMain.handle("add-customer", async (event, doc:Customer)=>{
    const result = await addCustomer(doc);
    return result;
})

//Funcão para buscar clientes
async function fetchAllCustomers(): Promise<Customer[]>{
    try{
        const result = await db.allDocs({include_docs: true});
        return result.rows.map(row => row.doc as Customer);
    }
    catch(err){
        console.log("Erro na busca de clientes ", err);
        return [];
    }
}

ipcMain.handle("fetch-all-customers", async ()=>{
    return await fetchAllCustomers();
})

//Buscando cliente pelo ID
async function fetchCustomerByID(docID: string){
    return db.get(docID)
    .then(doc => doc)
    .catch(err => {
        console.log("Erro ao consultar cliente por id ", err);
        return null;
    })
}

ipcMain.handle("fetch-customer-id", async (event, docID)=> {
    const result = await fetchCustomerByID(docID);
    return result;
} )

//Remover clientes
async function deleteCustomer(docID: string): Promise<PouchDB.Core.Response | null>{
    try{
        const doc = await db.get(docID);
        const result = await db.remove(doc._id, doc._rev)
        return result;
    }
    catch(err){
        console.log("Erro ao deletar: ", err);
        return null
    }
}

ipcMain.handle("delete-customer", async (event, docID: string): Promise<PouchDB.Core.Response | null>=>{
    return await deleteCustomer(docID);
})