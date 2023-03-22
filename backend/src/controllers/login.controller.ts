import { Body, Controller, HttpException, HttpStatus, Get, Param, Post, Res, UnauthorizedException } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from 'src/dtos/login.dto';
import { CreatorService } from 'src/services/creator.service';

@Controller()
export class LoginController {
  constructor(
    private readonly creatorService: CreatorService
  ) {}

  @Post("/login")
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const isAuthenticated = await this.creatorService.login(loginDto);
    if (!isAuthenticated) {
      throw new UnauthorizedException();
    }
    ;
    return res.status(200).json({});
    // return res.status(200).json({});
    // if (params.username == "admin" && params.password == "admin") {
    // }
    // return res.status(401).json({});
  }
  // async login(@Body() loginDto: LoginDto): Promise<boolean> {
  //   return this.creatorService.login(loginDto);
  // }

  // @Post("/login")
  // login(@Body() params, @Res() res: Response) {
  //   console.log("login", params);
  //   if (params.username == "admin" && params.password == "admin") {
  //       return res.status(200).json({});
  //   }
  //   return res.status(401).json({});
  // }

}
