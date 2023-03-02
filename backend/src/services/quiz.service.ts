import { Injectable, Inject } from '@nestjs/common';
import { QuizDto } from '../dtos/quiz.dto';
import { Repository } from 'typeorm';
import Quiz from '../entities/quiz.entity';
import e from 'express';

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
    quiz.creator = undefined; // TODO a belepett user kell majd
    return this.quizRepository.save(quiz);
  }
}
