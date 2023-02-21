import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import Creator from '../entities/creator.entity';

@Injectable()
export class CreatorService {
  constructor(
    @Inject('CREATOR_REPOSITORY')
    private creatorRepository: Repository<Creator>,
  ) {}

  async findAll(): Promise<Creator[]> {
    return this.creatorRepository.find();
  }

  async findById(id: number): Promise<Creator> {
    return this.creatorRepository.findOneBy({
      id
    })
  }
}
