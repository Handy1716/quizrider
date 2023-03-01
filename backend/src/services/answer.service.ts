import { Injectable, Inject } from '@nestjs/common';
import { AnswerDto } from 'src/dtos/answer.dto';
import Question from 'src/entities/question.entity';
import { Repository } from 'typeorm';
import Answer from '../entities/answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @Inject('ANSWER_REPOSITORY')
    private answerRepository: Repository<Answer>,
  ) {}

  async findAll(): Promise<Answer[]> {
    return this.answerRepository.find();
  }

  async findById(id: number): Promise<Answer> {
    return this.answerRepository.findOneBy({
      id
    })
  }

  async create(params: AnswerDto): Promise<Answer> {
    const answer: Answer = new Answer();
    answer.question = new Question();
    answer.text = params.text;
    answer.rightAnswer = params.rightAnwer;
    return this.answerRepository.save(answer);
  }
}
