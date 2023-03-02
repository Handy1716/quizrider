import { Injectable, Inject } from '@nestjs/common';
import { AnswerDto } from '../dtos/answer.dto';
import Question from '../entities/question.entity';
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

  async create(params: AnswerDto, question: Question): Promise<Answer> {
    const answer: Answer = new Answer();
    answer.question = question;
    answer.text = params.text;
    answer.rightAnswer = params.rightAnwer;
    return this.answerRepository.save(answer);
  }
}
