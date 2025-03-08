// src/authentication/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'secret',
    });
    console.log('JwtStrategy initialized: ', configService.get('JWT_SECRET'));
  }

  validate(payload: unknown): unknown {
    // This one is really useful to check the jwt payload!
    return payload;
  }

  authenticate(req: any) {
    super.authenticate(req);
  }
}
