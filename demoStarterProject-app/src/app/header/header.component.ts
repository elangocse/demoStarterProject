import { Component, OnInit } from '@angular/core';
import { CookieService, CookieOptions } from 'ngx-cookie';
//import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token: string;
  model: any = {};
  headerUsername:string;
  headerprofilephotoURL:string ="assets/images/avatar.png";
  isLoggedIn:Boolean = false;
  isAdmin:Boolean = false;

  constructor() { }

  ngOnInit() {
   /* let opts: CookieOptions = {
      httpOnly: true
    };
    this.token=this._cookieService.get('cnauth-cookie');
    if (typeof this.token != "undefined" && this.token.length > 0) 
    {
      console.log("Calling Validate");
        this.loginService.validate(this.token, "authenticateToken:" ).subscribe(response => {
          if (typeof response.expirytime != "undefined" && response.expirytime > 0 && typeof response.username != "undefined") {
                this.model.username = response.username;
               this.loginService.queryUserProfile(this.model.username).subscribe(response => {
                  this.headerUsername = response.firstName;
                  this.headerprofilephotoURL = response.profilephotoURL;
                  this.isLoggedIn = true;
                  /*if (typeof response.userAuthorities != "undefined" && response.userAuthorities.length > 0) {
                    for (var i = 0; i < response.userAuthorities.length; i++) {
                     if(response.userAuthorities[i].authority['type'] == 'ADMIN' )
                      this.isAdmin = true;
                     }
                  }*/                        
         /*       },error => {
                  this.isLoggedIn = false;
                  //this.isAdmin = false; 
                });
            }
        },error => {
          this.isLoggedIn = false;
          //this.isAdmin = false; 
        });
    }
  }

  profile(){
    //window.location.href="https://cloudapplicationstoolkit.apps.pcf.dxc.com/um/#/userprofile";
	window.location.href = window.location.protocol + "//" + window.location.hostname + "/um/#/userprofile";
  }
  
  logout(){
    sessionStorage.removeItem('userdata');
    //window.location.href="https://cloudapplicationstoolkit.apps.pcf.dxc.com/um/#/logout";
	window.location.href = window.location.protocol + "//" + window.location.hostname + "/um/#/logout";
  }
*/

}
}