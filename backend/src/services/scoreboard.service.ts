import { Injectable, Inject } from '@nestjs/common';
import { ScoreboardDto } from '../dtos/scoreboard.dto';
import { Repository } from 'typeorm';
import ScoreboardEntity from '../entities/scoreboard.entity';
import RuncodeEntity from 'src/entities/runcode.entity';

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

  async create(params: ScoreboardDto, runcode: RuncodeEntity): Promise<ScoreboardEntity> {
    const scoreboard: ScoreboardEntity = ScoreboardEntity.create();
    scoreboard.deviceId = params.deviceId;
    scoreboard.name = params.name;
    scoreboard.points = params.points;
    scoreboard.runcode = runcode;
    return this.scoreboardRepository.save(scoreboard);
  }
}
