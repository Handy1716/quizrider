import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatorDto } from 'src/dtos/creator.dto';
import Creator from 'src/entities/creator.entity';
import { CreatorService } from '../services/creator.service';

@Controller("/creator")
export class CreatorController {
  constructor(
    private readonly creatorService: CreatorService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<Creator> {
    return this.creatorService.findById(id)
  }

  @Post()
  create(@Body() creatorDto: CreatorDto): Promise<Creator> {
    return this.creatorService.create(creatorDto)
  }
}
