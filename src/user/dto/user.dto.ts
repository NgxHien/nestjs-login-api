export class CreateUserDto {
    readonly fullName: string;

    readonly email: string;

    readonly password: string;

    readonly passwordUpdateTime: Date;

    readonly phone: string;

    readonly status: boolean;

    readonly picture_url: string;
}

export class LoginUserDto {
    readonly email: string;

    readonly password: string;
}