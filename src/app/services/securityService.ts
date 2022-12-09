import { HttpHelper } from "../common/httpHelper";

// @Injectable({
//     providedIn: 'root',
// })
// export class SecurityService {
//     constructor(private httpHelper: HttpHelper,
//         private localStorageService: LocalStorageService) {

//     }

    // login(login: Login): Observable<any> {
    //     const url = 'api/security/login';
    //     return this.httpHelper.postHelper(url, login);
    // }

    // forget(forgtPasswordModel: ForgetPasswordModel): Observable<any> {
    //     const url = 'api/user/forgetPassword';
    //     return this.httpHelper.postHelper(url, forgtPasswordModel);
    // }

    // recoverPassword(data: RecoveryPasswordModel): Observable<any> {
    //     const forgtPasswordModel = JSON.stringify(data);
    //     const url = 'api/recoverPassword/recover';
    //     return this.httpHelper.postHelper(url, forgtPasswordModel);
    // }

    // logOut(): any {
    //     const url = 'api/security/logout';
    //     this.dataService.removeData();
    //     this.localStorageService.removeData('order');
    //     return this.httpHelper.postHelper(url);
    // }
    // isAuthenticate(): any {
    //     const url = 'api/security/is-auth';
    //     return this.httpHelper.getHelper(url);
    // }
    // getActionLogList(startRow: number = 0, endRow: number = 10): Observable<any> {
    //     const url = 'api/security/getList/startRow='
    //         .concat(startRow.toString())
    //         .concat('/')
    //         .concat('endRow=')
    //         .concat(endRow.toString());
    //     return this.httpHelper.getHelper(url);
    // }

    // getActionLogListFilter(
    //     search: string,
    //     startRow: number = 0,
    //     endRow: number = 10
    // ): Observable<any> {
    //     if (search.length < 1 || search == null || search == '') {
    //         const url = 'api/security/getList/startRow='
    //             .concat(startRow.toString())
    //             .concat('/endRow=')
    //             .concat(endRow.toString());
    //         return this.httpHelper.getHelper(url);
    //     } else {
    //         const url = 'api/security/filter/startRow='
    //             .concat(startRow.toString())
    //             .concat('/endRow=')
    //             .concat(endRow.toString())
    //             .concat('/')
    //             .concat(search);
    //         return this.httpHelper.getHelper(url);
    //     }
    // }
// }
