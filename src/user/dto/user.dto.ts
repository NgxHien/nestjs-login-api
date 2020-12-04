import { IsEmail, IsIn, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    readonly fullName: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    readonly passwordUpdateTime: Date;

    readonly phone: string;

    @IsIn(['ONLINE', 'OFFLINE'])
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