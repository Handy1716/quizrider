import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TagDto } from 'src/dtos/tag.dto';
import Tag from 'src/entities/tag.entity';
import { TagService } from '../services/tag.service';

@Controller("/tag")
export class TagController {
  constructor(
    private readonly tagService: TagService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<Tag> {
    return this.tagService.findById(id)
  }

  @Post()
  create(@Body() tagDto: TagDto): Promise<Tag> {
    return this.tagService.create(tagDto)
  }
}