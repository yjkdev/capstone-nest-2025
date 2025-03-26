import { IsNotEmpty, IsEmail } from 'class-validator';
import { StartupSnapshot } from 'v8';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  social_chek: number;

  name: string;
}