import { Observable } from 'rxjs';
import { IUser } from '../models/user.interface';
import { UserService } from '../service/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(user: IUser): Observable<IUser | any>;
    login(user: IUser): Observable<any>;
    findOne(params: any): Observable<IUser>;
}
