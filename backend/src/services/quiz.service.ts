import { Injectable, Inject } from '@nestjs/common';
import { QuizDto } from '../dtos/quiz.dto';
import { Repository } from 'typeorm';
import QuizEntity from '../entities/quiz.entity';
import e from 'express';

@Injectable()
export class QuizService {
  constructor(
    @Inject('QUIZ_REPOSITORY')
    private quizRepository: Repository<QuizEntity>,
  ) {}

  async findAll(): Promise<QuizEntity[]> {
    return this.quizRepository.find();
  }

  async findById(id: number): Promise<QuizEntity> {
    return this.quizRepository.findOneBy({
      id
    })
  }

  async create(params: QuizDto): Promise<QuizEntity> {
    const quiz: QuizEntity = new QuizEntity();
    quiz.name = params.name;
    quiz.public = params.public;
    quiz.oneRound = params.oneRound;
    quiz.creator = undefined; // TODO a belepett user kell majd
    return this.quizRepository.save(quiz);
  }
}
