import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from '../../auth/service/auth.service';
import { CreateUserDto } from '../dto/user.dto';
import { User, UserDocument } from '../models/user.schema';


@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private authService: AuthService
  ) { }

  async create(createUserDto: CreateUserDto) {
    const createUser = new this.userModel(createUserDto);
    const user = await this.userModel.find({ email: createUser.email });
    if (user.length) {
      return {
        message: 'Email existed!!!'
      };
    }
    createUser.password = await this.authService.hashPassword(createUser.password);
    createUser.status = false;
    createUser.passwordUpdateTime = new Date(Date.now());
    createUser.save();
    const jwt = await this.authService.generateJWT(createUser);
    const success = { data: { regToken: jwt } };
    return success;
  }

  async login(email: string, password: string) {
    if (!email || !password) {
      return {
        message: "Missing argument"
      };
    }
    const user = await this.userModel.find({ email: email });
    if (!user.length) {
      return {
        message: "Account doesn't existed!!!"
      };
    }
    const checkPass = await this.authService.comparePasswords(password, user[0].password);
    if (!checkPass) {
      return {
        message: "Wrong email or password!!!"
      }
    }
    const regToken = (await this.authService.generateJWT(user[0])).toString();

    return {
      regToken
    }
  }

  async delete(email: string) {
    if (!email) {
      return {
        message: "Need email to delete!"
      }
    }
    const userWithEmail = await this.userModel.find({ email });
    if (!userWithEmail.length) {
      return {
        message: "You dont have account in system!!!"
      }
    }
    await this.userModel.deleteOne({ email });
    return { message: "Account had been deleted" }
  }

  async update(user: User) {
    const { email, password, fullName, phone } = user;

    if (!email) {
      return {
        message: "Must have email"
      }
    }
    const userWithEmail = await this.userModel.find({ email });
    if (!userWithEmail.length) {
      return {
        message: "You dont have account in system!!!"
      }
    }
    await this.userModel.updateOne({ email }, { password, fullName, phone });
    return { message: "Account updated" };
  }

  async findOne(id: string): Promise<any> {
    return this.userModel.find({ _id: id });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
