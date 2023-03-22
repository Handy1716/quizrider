import { Body, Controller, HttpException, HttpStatus, Get, Param, Post, Res, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from 'src/dtos/login.dto';
import { CreatorService } from 'src/services/creator.service';
import { JwtService } from '@nestjs/jwt';
import { appConstants } from 'src/modules/app.module';

@Controller()
export class LoginController {
  constructor(
    private readonly creatorService: CreatorService,
    private readonly jwtService: JwtService
  ) {}

  @Post("/login")
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const isAuthenticated = await this.creatorService.login(loginDto);
    if (!isAuthenticated) {
      throw new UnauthorizedException();
    }
    const token = this.jwtService.sign({
      email: loginDto.email
    }, {
      secret: appConstants.jwtSecret
    });
    return res.status(200).json({
      token
    });
  }

}
