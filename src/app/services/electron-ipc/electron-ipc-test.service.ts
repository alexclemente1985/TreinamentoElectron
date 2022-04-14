import { Injectable } from '@angular/core';

const { ipcRenderer } = (<any>window).require('electron');

@Injectable({
  providedIn: 'root'
})
export class ElectronIpcTestService {

  asyncReplyResult: any;

  constructor() {
    ipcRenderer.on('asynchronous-reply', (event: any,arg: any)=>{
      console.log('async');
      console.log(arg);
      this.asyncReplyResult = arg;
    })
  }

  test(val: any){
    ipcRenderer.send('asynchronous-message', val);
  }

  setCookie(cookie: any){
    return ipcRenderer.sendSync('set-cookie-sync', cookie)
  }

  getCookie(filter: any){
    return ipcRenderer.sendSync('get-cookie-sync', filter)
  }
}
