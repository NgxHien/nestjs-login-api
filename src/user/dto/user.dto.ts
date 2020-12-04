import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";

export enum UserStatus {
    active = 'active',
    inactive = 'inactive'
}

export class CreateUserDto {
    readonly fullName: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    readonly passwordUpdateTime: Date;

    readonly phone: string;

    @IsEnum(UserStatus)
    readonly status: UserStatus;

    readonly picture_url: string;
}

export class LoginUserDto {

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
}