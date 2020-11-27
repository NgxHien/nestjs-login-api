import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/service/auth.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../models/user.entity';
import { IUser } from '../models/user.interface';
export declare class UserService {
    private readonly userRepository;
    private authService;
    constructor(userRepository: Repository<UserEntity>, authService: AuthService);
    create(user: IUser): Observable<IUser>;
    findOne(id: number): Observable<IUser>;
    findAll(): Observable<IUser[]>;
    deleteOne(id: number): Observable<any>;
    updateOne(id: number, user: IUser): Observable<any>;
    login(user: IUser): Observable<string>;
    validateUser(email: string, password: string): Observable<IUser>;
    findByEmail(email: string): Observable<IUser>;
}
