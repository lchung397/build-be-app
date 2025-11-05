import { UsersService } from './users.service';
import { CreateUserDto } from './users.pipe';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    loadDog(): string[];
    getProfile(user: any): {
        id: number;
    };
    findOne(id: number): string;
    createUser(body: CreateUserDto): CreateUserDto;
}
