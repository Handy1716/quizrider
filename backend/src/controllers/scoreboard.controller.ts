import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { RuncodeService } from 'src/services/runcode.service';
import { ScoreboardDto } from '../dtos/scoreboard.dto';
import ScoreboardEntity from '../entities/scoreboard.entity';
import { ScoreboardService } from '../services/scoreboard.service';

@Controller("/scoreboard")
export class ScoreboardController {
  constructor(
    private readonly scoreboardService: ScoreboardService,
    private readonly runcodeService: RuncodeService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<ScoreboardEntity> {
    return this.scoreboardService.findById(id)
  }

  @Post()
  async create(@Body() scoreboardDto: ScoreboardDto): Promise<ScoreboardEntity> {
    const runCode = await this.runcodeService.findByCode(scoreboardDto.runCode);
    if (!runCode) {
      throw new UnauthorizedException();
    }
    return this.scoreboardService.create(scoreboardDto, runCode);
  }
}
