import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const data = await this.userRepository.save(createUserDto);

    return {
      access_token: this.jwtService.sign(
        { id: data.id },
        {
          expiresIn: '7d',
          secret: process.env.JWT_SECRET,
        },
      ),
    };
  }

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOneUser(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }
}
