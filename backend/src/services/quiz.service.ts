import { Injectable, Inject } from '@nestjs/common';
import { QuizDto } from '../dtos/quiz.dto';
import { Repository } from 'typeorm';
import QuizEntity from '../entities/quiz.entity';
import e from 'express';
import CreatorEntity from 'src/entities/creator.entity';

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

  async create(params: QuizDto, creator: CreatorEntity): Promise<QuizEntity> {
    const quiz: QuizEntity = QuizEntity.create();
    quiz.name = params.name;
    quiz.public = params.public;
    quiz.oneRound = params.oneRound;
    quiz.creator = creator;
    quiz.questions = [];
    quiz.runcodes = [];
    quiz.tags = [];
    return this.quizRepository.save(quiz);
  }
}
