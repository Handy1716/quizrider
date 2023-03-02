import { Injectable, Inject } from '@nestjs/common';
import { CreatorDto } from '../dtos/creator.dto';
import { Repository } from 'typeorm';
import CreatorEntity from '../entities/creator.entity';

@Injectable()
export class CreatorService {
  constructor(
    @Inject('CREATOR_REPOSITORY')
    private creatorRepository: Repository<CreatorEntity>,
  ) {}

  async findAll(): Promise<CreatorEntity[]> {
    return this.creatorRepository.find();
  }

  async findById(id: number): Promise<CreatorEntity> {
    return this.creatorRepository.findOneBy({
      id
    })
  }

  async create(params: CreatorDto): Promise<CreatorEntity> {
    const creator: CreatorEntity = new CreatorEntity();
    creator.name = params.name;
    creator.email = params.email;
    creator.password = params.password;
    return this.creatorRepository.save(creator);
  }
}
