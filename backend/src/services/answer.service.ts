import { Injectable, Inject } from '@nestjs/common';
import { AnswerDto } from '../dtos/answer.dto';
import QuestionEntity from '../entities/question.entity';
import { Repository } from 'typeorm';
import AnswerEntity from '../entities/answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @Inject('ANSWER_REPOSITORY')
    private answerRepository: Repository<AnswerEntity>,
  ) {}

  async findAll(): Promise<AnswerEntity[]> {
    return this.answerRepository.find();
  }

  async findById(id: number): Promise<AnswerEntity> {
    return this.answerRepository.findOneBy({
      id
    })
  }

  async create(params: AnswerDto, question: QuestionEntity): Promise<AnswerEntity> {
    const answer: AnswerEntity = AnswerEntity.create();
    answer.text = params.text;
    answer.rightAnswer = params.rightAnswer;
    answer.question = question;
    return this.answerRepository.save(answer);
  }
}
