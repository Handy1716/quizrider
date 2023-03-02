import { Injectable, Inject } from '@nestjs/common';
import { TagDto } from '../dtos/tag.dto';
import { Repository } from 'typeorm';
import TagEntity from '../entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @Inject('TAG_REPOSITORY')
    private tagRepository: Repository<TagEntity>,
  ) {}

  async findAll(): Promise<TagEntity[]> {
    return this.tagRepository.find();
  }

  async findById(id: number): Promise<TagEntity> {
    return this.tagRepository.findOneBy({
      id
    })
  }

  async create(params: TagDto): Promise<TagEntity> {
    const tag: TagEntity = TagEntity.create();
    tag.text = params.text;
    tag.quizzes = [];
    return this.tagRepository.save(tag);
  }
}
