import { Injectable, Inject } from '@nestjs/common';
import { CreatorDto } from '../dtos/creator.dto';
import { Repository } from 'typeorm';
import CreatorEntity from '../entities/creator.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/dtos/login.dto';
import { kMaxLength } from 'buffer';

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

  async findByEmail(email: string): Promise<CreatorEntity> {
    return this.creatorRepository.findOneBy({
      email
    })
  }

  async create(params: CreatorDto): Promise<CreatorEntity> {
    const creator: CreatorEntity = CreatorEntity.create();
    creator.name = params.name;
    creator.email = params.email;
    const salt = await bcrypt.genSalt();
    creator.password =  await bcrypt.hash(params.password, salt);
    creator.quizzes = [];
    return this.creatorRepository.save(creator);
  }

  async login(params: LoginDto): Promise<boolean> {
    const user = await this.findByEmail(params.email);
    const isMatch = await bcrypt.compare(params.password, user?.password || '');
    return isMatch;
  }
}
