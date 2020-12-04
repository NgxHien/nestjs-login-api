import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    readonly fullName: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;


    readonly passwordUpdateTime: Date;
    readonly phone: string;
    readonly status: string;
    readonly picture_url: string;
}

export class LoginUserDto {

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
}