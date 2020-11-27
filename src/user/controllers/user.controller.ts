import { Body, Controller, Delete, Get, Param, Post, Request } from '@nestjs/common';
import { AuthService } from '../../auth/service/auth.service';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { User } from '../models/user.schema';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly usersService: UserService,
  ) { }

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Post('login')
  async login(@Body() user: LoginUserDto) {
    return await this.usersService.login(user.email, user.password);
  }

  @Post('update')
  async update(@Body() user: CreateUserDto) {
    return await this.usersService.update(user);
  }

  @Delete('delete')
  async delete(@Body() { email }) {
    return await this.usersService.delete(email);
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<User[]> {
    return this.usersService.findOne(id);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
