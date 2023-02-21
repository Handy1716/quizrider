import { Injectable, Inject } from '@nestjs/common';
import { CreatorDto } from 'src/dtos/creator.dto';
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

  async create(params: CreatorDto): Promise<Creator> {
    const creator: Creator = new Creator();
    creator.name = params.name;
    creator.email = params.email;
    creator.password = params.password;
    return this.creatorRepository.save(creator);
  }
}
