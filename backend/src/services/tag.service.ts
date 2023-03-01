import { Injectable, Inject } from '@nestjs/common';
import { TagDto } from '../dtos/tag.dto';
import { Repository } from 'typeorm';
import Tag from '../entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @Inject('TAG_REPOSITORY')
    private tagRepository: Repository<Tag>,
  ) {}

  async findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  async findById(id: number): Promise<Tag> {
    return this.tagRepository.findOneBy({
      id
    })
  }

  async create(params: TagDto): Promise<Tag> {
    const tag: Tag = new Tag();
    tag.text = params.text;
    return this.tagRepository.save(tag);
  }
}
