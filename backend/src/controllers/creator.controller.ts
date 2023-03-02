import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatorDto } from '../dtos/creator.dto';
import CreatorEntity from '../entities/creator.entity';
import { CreatorService } from '../services/creator.service';

@Controller("/creator")
export class CreatorController {
  constructor(
    private readonly creatorService: CreatorService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<CreatorEntity> {
    return this.creatorService.findById(id)
  }

  @Post()
  create(@Body() creatorDto: CreatorDto): Promise<CreatorEntity> {
    return this.creatorService.create(creatorDto)
  }
}
