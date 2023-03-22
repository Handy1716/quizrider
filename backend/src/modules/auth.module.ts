import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthStrategy } from 'src/providers/auth.providers';
import { appConstants } from './app.module';

@Module({
  imports: [
    JwtModule.register({
        secret: appConstants.jwtSecret,
        signOptions: { expiresIn: '7 days' },
    })
  ],
  providers: [JwtAuthStrategy]
})
export class AuthModule {}
