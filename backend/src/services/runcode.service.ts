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

  async findAll(): Promise<RuncodeEntity[]> {
    return this.runcodeRepository.find();
  }

  async findById(id: number): Promise<RuncodeEntity> {
    return this.runcodeRepository.findOneBy({
      id
    })
  }

  private generateRuncode(): number {
    return 1;
  }

  async create(params: RuncodeDto, quiz: QuizEntity): Promise<RuncodeEntity> {
    const runcode: RuncodeEntity = RuncodeEntity.create();
    runcode.runCode = this.generateRuncode();
    runcode.quiz = quiz;
    runcode.scoreboards = [];
    return this.runcodeRepository.save(runcode);
  }
  
}
