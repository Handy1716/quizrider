import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TagDto } from '../dtos/tag.dto';
import TagEntity from '../entities/tag.entity';
import { TagService } from '../services/tag.service';

@Controller("/tag")
export class TagController {
  constructor(
    private readonly tagService: TagService
  ) {}

  @Get("/top")
  async findByTop(): Promise<TagEntity[]> {
    const tags = await this.tagService.findAll();
    return tags.sort((a, b) => b.counts - a.counts).slice(0, 20);
  }

  @Post()
  create(@Body() tagDto: TagDto): Promise<TagEntity> {
    return this.tagService.create(tagDto)
  }
}