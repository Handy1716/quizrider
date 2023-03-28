import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { Request, UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/providers/auth.providers';
import { CreatorDto } from '../dtos/creator.dto';
import CreatorEntity from '../entities/creator.entity';
import { CreatorService } from '../services/creator.service';

@Controller("/creator")
export class CreatorController {
  constructor(
    private readonly creatorService: CreatorService
  ) {}

  // @UseGuards(JwtAuthGuard)
  // @Get("/:id")
  // async findById(@Param('id') id: number): Promise<CreatorEntity> {
  //   const user = await this.creatorService.findById(id);
  //   return user;
  // }

  @UseGuards(JwtAuthGuard)
  @Get("/me")
  async me(@Request() req: any): Promise<CreatorEntity> {
    const user = await this.creatorService.findById(req.user.id);
    return user;
  }

  @Post()
  async create(@Body() creatorDto: CreatorDto): Promise<CreatorEntity> {
    const user = await this.creatorService.findByEmail(creatorDto.email);
    if (user) {
      throw new HttpException('Email exists', HttpStatus.BAD_REQUEST);
    }
    return this.creatorService.create(creatorDto)
  }

}
