import { Injectable, Inject } from '@nestjs/common';
import { QuizDto } from '../dtos/quiz.dto';
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
    quiz.name = params.name;
    quiz.public = params.public;
    quiz.oneRound = params.oneRound;
    
    // for vegig a params.quest...
    // new Question
    // question.text
    // question.Quiz = quiz


    return this.quizRepository.save(quiz);
  }
}
