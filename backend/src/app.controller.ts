import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataSource } from "typeorm";
import './app.datasource';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource
  ) {}

  @Get()
  default(): string {
    return this.appService.default();
  }
}
