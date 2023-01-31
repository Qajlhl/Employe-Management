import { UserService } from './user.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UserService);
    createToken(user: any): any;
    validateUser(payload: any): boolean;
}
