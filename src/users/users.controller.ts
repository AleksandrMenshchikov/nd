import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Public } from '../shared/custom-decorators';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ access_token: string }> {
    return this.usersService.createUser(createUserDto);
  }

  @ApiBearerAuth()
  @Get()
  findAllUsers(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }
}
