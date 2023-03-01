import { Injectable, Inject } from '@nestjs/common';
import { QuizDto } from 'src/dtos/quiz.dto';
import { Repository } from 'typeorm';
import Quiz from '../entities/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @Inject('QUIZ_REPOSITORY')
    private quizRepository: Repository<Quiz>,
  ) {}

  async findAll(): Promise<Quiz[]> {
    return this.quizRepository.find();
  }

  async findById(id: number): Promise<Quiz> {
    return this.quizRepository.findOneBy({
      id
    })
  }

  async create(params: QuizDto): Promise<Quiz> {
    const quiz: Quiz = new Quiz();
    quiz.creatorId = params.creatorId;
    quiz.name = params.name;
    quiz.public = params.public;
    quiz.oneRound = params.oneRound;
    return this.quizRepository.save(quiz);
  }
}
