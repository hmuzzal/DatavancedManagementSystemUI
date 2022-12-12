import { Component } from '@angular/core';

declare var $: any;
declare function tooglePass(): any;


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent {

    //   constructor(
    //     private securityService: SecurityService,
    //     private router: Router,
    //     private toastr: ToastrService,
    //     private authGuardService: AuthGuardService
    //   ) {
    //     if (localStorage.getItem('AuthType') == "Identity") {
    //       this.authGuardService.isAuthenticated()
    //         .then(userAuthenticated => {
    //           if (userAuthenticated) {
    //             this.router.navigate(['/']);
    //             return;
    //           }
    //         })
    //     }
    //     else {
    //       this.router.navigate(['/login']);
    //       return;
    //     }
    //   }


    ngOnInit(): void {
        // localStorage.setItem('Token', '');
        // localStorage.setItem('User', '');
        // tooglePass();
    }

    //   public onSubmit() {
    //     this.securityService.login(this.model).subscribe((response) => {
    //       console.log('loginsss')
    //       if (response.responseCode === ResponseStatus.success) {
    //         console.log(response)
    //         localStorage.setItem('Token', response.responseObj.token);
    //         localStorage.setItem('User', JSON.stringify(response.responseObj.user));
    //         localStorage.setItem('UserId', response.responseObj.user.userId);
    //         localStorage.setItem('currentUser', JSON.stringify(response.responseObj.user));
    //         localStorage.setItem('userName', JSON.stringify(response.responseObj.user.firstName));


    //         this.toastr.success('Login Successfully!', 'Login');
    //         this.router.navigateByUrl('/');
    //       } else {
    //         this.responseMessageType = response.responseMessageType;
    //         this.messageHelper.showMessage(response.responseCode, response.message);
    //       }
    //     });
    //   }


}

