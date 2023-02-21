import { Controller, Get, Param } from '@nestjs/common';
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
}
