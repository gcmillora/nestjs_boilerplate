// src/authentication/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { passportJwtSecret } from 'jwks-rsa';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const issuerUrl = configService.get('CLERK_ISSUER_URL');
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${issuerUrl}/.well-known/jwks.json`,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      issuer: `${issuerUrl}`,
      algorithms: ['RS256'],
    });
    console.log(
      'JwtStrategy initialized: ',
      configService.get('CLERK_ISSUER_URL'),
    );
  }

  validate(payload: unknown): unknown {
    // This one is really useful to check the jwt payload!
    return payload;
  }
}
