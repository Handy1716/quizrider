import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class LoginController {
  constructor(
  ) {}

  @Post("/login")
  login(@Body() params, @Res() res: Response) {
    console.log("login", params);
    if (params.username == "admin" && params.password == "admin") {
        return res.status(200).json({});
    }
    return res.status(401).json({});
  }

}
