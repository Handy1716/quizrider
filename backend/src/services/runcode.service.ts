import { Injectable, Inject } from '@nestjs/common';
import { RuncodeDto } from '../dtos/runcode.dto';
import { Repository } from 'typeorm';
import Runcode from '../entities/runcode.entity';

@Injectable()
export class RuncodeService {
  constructor(
    @Inject('RUNCODE_REPOSITORY')
    private runcodeRepository: Repository<Runcode>,
  ) {}

  async findAll(): Promise<Runcode[]> {
    return this.runcodeRepository.find();
  }

  async findById(id: number): Promise<Runcode> {
    return this.runcodeRepository.findOneBy({
      id
    })
  }

  async create(params: RuncodeDto): Promise<Runcode> {
    const runcode: Runcode = new Runcode();
    runcode.quizId = params.quizId;
    runcode.runCode = 1; // TODO generalni egy kodot;
    return this.runcodeRepository.save(runcode);
  }
}
