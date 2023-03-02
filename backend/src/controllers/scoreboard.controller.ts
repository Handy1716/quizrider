import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ScoreboardDto } from '../dtos/scoreboard.dto';
import ScoreboardEntity from '../entities/scoreboard.entity';
import { ScoreboardService } from '../services/scoreboard.service';

@Controller("/scoreboard")
export class ScoreboardController {
  constructor(
    private readonly scoreboardService: ScoreboardService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<ScoreboardEntity> {
    return this.scoreboardService.findById(id)
  }

  @Post()
  create(@Body() scoreboardDto: ScoreboardDto): Promise<ScoreboardEntity> {
    return this.scoreboardService.create(scoreboardDto)
  }
}
