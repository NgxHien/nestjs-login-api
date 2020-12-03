import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    readonly fullName: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;


    readonly passwordUpdateTime: Date;
    readonly phone: string;
    readonly status: string;
    readonly picture_url: string;
}

export class LoginUserDto {
    readonly email: string;

    readonly password: string;
}