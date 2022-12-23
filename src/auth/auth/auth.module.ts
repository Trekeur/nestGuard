import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from '../jwt/jwtAuth.guard';
import { JwsStrategy } from '../jwt/jwt.strategy';
import { falseBdd } from '../falseBdd';
import { environments } from 'src/environments/environments';

@Module({
  exports: [AuthService, falseBdd,],
  providers: [
    AuthService,
    JwsStrategy,
    falseBdd,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
  imports: [
    PassportModule,
    //Les modification de la sécurKey ici ↓ 
    JwtModule.register({
      secret: environments.jwtConstantsSecretKey.secret,
      // signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule { }
