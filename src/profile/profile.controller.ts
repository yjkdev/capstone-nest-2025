import { Controller, Get, UseGuards, Request, Post } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // JwtAuthGuard import

@Controller('profile')
export class ProfileController {
  @UseGuards(JwtAuthGuard) // JwtAuthGuard로 보호
  @Get()
  getProfile(@Request() req) {
    return req.user; // 인증된 사용자 정보 반환 (JwtStrategy의 validate 메서드에서 설정)
  }
}