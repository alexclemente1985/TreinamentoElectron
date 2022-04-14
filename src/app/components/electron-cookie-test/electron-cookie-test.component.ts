import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ElectronIpcTestService } from 'src/app/services/electron-ipc/electron-ipc-test.service';



@Component({
  selector: 'app-electron-cookie-test',
  templateUrl: './electron-cookie-test.component.html',
  styleUrls: ['./electron-cookie-test.component.scss']
})
export class ElectronCookieTestComponent implements OnInit {
  private githubApi = "https://api.github.com/users/"
  username = ""
  output = ""
  avatar_url = ""
  cookieData: string | undefined

  constructor(private http: HttpClient, private electronService: ElectronIpcTestService) {

  }

  loadData(user = "SciTech-Enthusiast") {
    this.http.get(this.githubApi + user).subscribe(
      (data: any) => {
        this.output = JSON.stringify(data, undefined, 10);
        this.avatar_url = data['avatar_url']
      }
    )
  }

  update(elemet: HTMLInputElement): void {
    if (elemet?.value)
      console.log("called " + elemet.value)
    this.loadData(elemet.value)
    var result=this.electronService.setCookie({ url: 'https://github.com', name: 'username', value: elemet.value, expirationDate: 9999999999 })
    if (result)
      console.log('data saved')
  }

  ngOnInit(): void {
    var cookie =this.electronService.getCookie({ name: 'username' })
    if(cookie){
      console.log(cookie[0]['value'])
      this.username = cookie[0]["value"]
      this.loadData(this.username)
    }
  }

  showCookie() {
    var cookie=this.electronService.getCookie({ name: 'username' })
    console.log('inside showCookie')
    console.log(cookie)
    if (cookie) {
      this.cookieData = JSON.stringify(cookie, undefined, 10)
    } else {
      this.cookieData = ""
    }
  }

}
