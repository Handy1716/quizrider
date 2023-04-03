import { Injectable, Inject } from '@nestjs/common';
import { RuncodeDto } from '../dtos/runcode.dto';
import { Repository } from 'typeorm';
import RuncodeEntity from '../entities/runcode.entity';
import QuizEntity from 'src/entities/quiz.entity';

@Injectable()
export class RuncodeService {
  constructor(
    @Inject('RUNCODE_REPOSITORY')
    private runcodeRepository: Repository<RuncodeEntity>,
  ) {}

  async findByCode(runCode: string): Promise<RuncodeEntity> {
    return this.runcodeRepository.findOneBy({
      runCode,
    })
  }

  private generateRuncode(): string {
    return Math.random().toString().slice(-9);
  }

  async create(quiz: QuizEntity): Promise<RuncodeEntity> {
    const runcode: RuncodeEntity = RuncodeEntity.create();
    runcode.runCode = this.generateRuncode();
    runcode.quiz = quiz;
    runcode.scoreboards = [];
    return this.runcodeRepository.save(runcode);
  }

}
