import { Injectable, Inject } from '@nestjs/common';
import { ScoreboardDto } from '../dtos/scoreboard.dto';
import { Repository } from 'typeorm';
import Scoreboard from '../entities/scoreboard.entity';

@Injectable()
export class ScoreboardService {
  constructor(
    @Inject('SCOREBOARD_REPOSITORY')
    private scoreboardRepository: Repository<Scoreboard>,
  ) {}

  async findAll(): Promise<Scoreboard[]> {
    return this.scoreboardRepository.find();
  }

  async findById(id: number): Promise<Scoreboard> {
    return this.scoreboardRepository.findOneBy({
      id
    })
  }

  async create(params: ScoreboardDto): Promise<Scoreboard> {
    const scoreboard: Scoreboard = new Scoreboard();
    scoreboard.deviceId = params.deviceId;
    scoreboard.name = params.name;
    scoreboard.runCodeId = params.runCodeId;
    scoreboard.finishTime = params.finishTime;
    scoreboard.points = params.points;
    return this.scoreboardRepository.save(scoreboard);
  }
}
