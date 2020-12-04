
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsIn } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {

    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    passwordUpdateTime: Date;

    @Prop({ required: true })
    phone: string;

    @Prop()
    @IsIn(["ONLINE", "OFFLINE"])
    status: Status;

    @Prop({ default: "https://image-uploader.sidz.tools/images/1590054460710-user.jpg" })
    picture_url: string;
}

export enum Status {
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE',
}

export const UserSchema = SchemaFactory.createForClass(User);