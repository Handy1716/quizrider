import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ScoreboardDto } from 'src/dtos/scoreboard.dto';
import Scoreboard from 'src/entities/scoreboard.entity';
import { ScoreboardService } from '../services/scoreboard.service';

@Controller("/scoreboard")
export class ScoreboardController {
  constructor(
    private readonly scoreboardService: ScoreboardService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<Scoreboard> {
    return this.scoreboardService.findById(id)
  }

  @Post()
  create(@Body() scoreboardDto: ScoreboardDto): Promise<Scoreboard> {
    return this.scoreboardService.create(scoreboardDto)
  }
}
