import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    name: string;
    email: string;
    password: string;
    phone: string;
}
export declare const UserSchema: import("mongoose").Schema<any>;
