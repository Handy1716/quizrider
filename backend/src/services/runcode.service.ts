import { Injectable, Inject } from '@nestjs/common';
import { RuncodeDto } from '../dtos/runcode.dto';
import { Repository } from 'typeorm';
import RuncodeEntity from '../entities/runcode.entity';

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

  async create(params: RuncodeDto): Promise<RuncodeEntity> {
    const runcode: RuncodeEntity = new RuncodeEntity();
    runcode.quizId = params.quizId;
    runcode.runCode = 1; // TODO generalni egy kodot;
    return this.runcodeRepository.save(runcode);
  }
}
