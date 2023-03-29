import { Body, Controller, HttpException, HttpStatus, Get, Param, Post, Res, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from 'src/dtos/login.dto';
import { CreatorService } from 'src/services/creator.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

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
    return res.status(200).json({
      token
    });
  }

}
