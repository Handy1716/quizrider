import { Injectable, Inject } from '@nestjs/common';
import { QuizTagDto } from '../dtos/quizTag.dto';
import { Repository } from 'typeorm';
import QuizTag from '../entities/quizTag.entity';

@Injectable()
export class QuizTagService {
  constructor(
    @Inject('QUIZTAG_REPOSITORY')
    private quizTagRepository: Repository<QuizTag>,
  ) {}

  async findAll(): Promise<QuizTag[]> {
    return this.quizTagRepository.find();
  }

  async findById(id: number): Promise<QuizTag> {
    return this.quizTagRepository.findOneBy({
      id
    })
  }

  async create(params: QuizTagDto): Promise<QuizTag> {
    const quizTag: QuizTag = new QuizTag();
    quizTag.quizId = params.quizId;
    quizTag.tagsId = params.tagsId;
    return this.quizTagRepository.save(quizTag);
  }
}
