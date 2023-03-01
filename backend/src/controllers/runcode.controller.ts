import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RuncodeDto } from '../dtos/runcode.dto';
import Runcode from '../entities/runcode.entity';
import { RuncodeService } from '../services/runcode.service';

@Controller("/runcode")
export class RuncodeController {
  constructor(
    private readonly runcodeService: RuncodeService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<Runcode> {
    return this.runcodeService.findById(id)
  }

  @Post()
  create(@Body() runcodeDto: RuncodeDto): Promise<Runcode> {
    return this.runcodeService.create(runcodeDto)
  }
}

