import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entity/user.entity';
import { CreateUserDto } from '../../src/user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<void> {
    const { email, password, social_chek,name } = createUserDto;

    const existingUser = await this.userRepository.findOneBy({ email });
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({ email, password: hashedPassword, social_chek,name });
    await this.userRepository.save(user);
  }

  async signIn(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findOneBy({ email });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }
  
    const payload = { email: user.email, sub: user.user_id };
    return this.jwtService.sign(payload);
  }

  async saveGoogleUser(userInfo: any): Promise<User> {
    const { email, name, picture } = userInfo
    
    let user = await this.userRepository.findOne({ where: { email }});

    if (!user) {
      user = this.userRepository.create({
        email,
        name,
        profile_image: picture,

      });
    } else {
      user.email = email;
      user.name = name;
      user.profile_image = picture;
    }

    return await this.userRepository.save(user)
  }
}