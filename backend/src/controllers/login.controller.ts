import { Body, Controller, Post, UnauthorizedException, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from 'src/dtos/login.dto';
import { CreatorService } from 'src/services/creator.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { HttpStatus } from '@nestjs/common/enums';

@Controller()
export class LoginController {
  constructor(
    private readonly creatorService: CreatorService,
    private readonly jwtService: JwtService,
    private configService: ConfigService
  ) {}

  @Post("/login")
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const user = await this.creatorService.login(loginDto);
    if (!user) {
      throw new UnauthorizedException();
    }
    const token = this.jwtService.sign({
      id: user.id,
      email: user.email
    }, {
      secret: this.configService.getOrThrow('JWT_SECRET')
    });
    return res.status(HttpStatus.OK).json({
      token
    });
  }

}
