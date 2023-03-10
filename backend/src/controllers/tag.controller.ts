import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TagDto } from '../dtos/tag.dto';
import TagEntity from '../entities/tag.entity';
import { TagService } from '../services/tag.service';

@Controller("/tag")
export class TagController {
  constructor(
    private readonly tagService: TagService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<TagEntity> {
    return this.tagService.findById(id)
  }

  @Post()
  create(@Body() tagDto: TagDto): Promise<TagEntity> {
    return this.tagService.create(tagDto)
  }
}