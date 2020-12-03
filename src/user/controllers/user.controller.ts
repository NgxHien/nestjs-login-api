import { Body, Controller, Delete, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from '../dto/user.dto';
import { User } from '../models/user.schema';
import { UserService } from '../service/user.service';
import { AuthGuard } from '@nestjs/passport';

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
  @UseGuards(AuthGuard())
  async update(@Request() req) {
    return await this.usersService.update(req.body);
  }

  @Delete('delete')
  @UseGuards(AuthGuard())
  async delete(@Request() req) {
    return await this.usersService.delete(req.body.email);
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
