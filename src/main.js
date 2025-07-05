const { ipcMain } = require('electron');
const sqlite3 = require("sqlite3")

const database = new sqlite3.Database("./public/db.sqlite3", err => {
    if(err) console.error("Erro ao abrir o banco de dados: ", err);
})

ipcMain.on('asynchronous-message', (event, arg) => {
    //console.log(arg); // prints "ping"
    //if (arg === 'ping') event.reply('asynchronous-reply', 'pong!');
    //else event.reply('asynchronous-reply', 'please, send me ping.');
    const sql = arg;
    console.log(arg)
    database.all(sql, (err, rows)=> {
        event.reply("asynchronous-reply", (err && err.message) || rows);
    })
}); 