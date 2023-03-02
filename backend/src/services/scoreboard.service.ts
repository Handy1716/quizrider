import { Injectable, Inject } from '@nestjs/common';
import { ScoreboardDto } from '../dtos/scoreboard.dto';
import { Repository } from 'typeorm';
import ScoreboardEntity from '../entities/scoreboard.entity';

@Injectable()
export class ScoreboardService {
  constructor(
    @Inject('SCOREBOARD_REPOSITORY')
    private scoreboardRepository: Repository<ScoreboardEntity>,
  ) {}

  async findAll(): Promise<ScoreboardEntity[]> {
    return this.scoreboardRepository.find();
  }

  async findById(id: number): Promise<ScoreboardEntity> {
    return this.scoreboardRepository.findOneBy({
      id
    })
  }

  async create(params: ScoreboardDto): Promise<ScoreboardEntity> {
    const scoreboard: ScoreboardEntity = new ScoreboardEntity();
    scoreboard.deviceId = params.deviceId;
    scoreboard.name = params.name;
    scoreboard.runCodeId = params.runCodeId;
    scoreboard.finishTime = params.finishTime;
    scoreboard.points = params.points;
    return this.scoreboardRepository.save(scoreboard);
  }
}
