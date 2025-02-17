import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'; // Passport의 AuthGuard import

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {} // 'jwt' 전략 사용