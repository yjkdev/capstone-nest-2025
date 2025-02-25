import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';

@Module({
  controllers: [ProfileController], // ProfileController 등록
})
export class ProfileModule {}