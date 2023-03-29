import { Injectable, Inject } from '@nestjs/common';
import { QuizDto } from '../dtos/quiz.dto';
import { Repository } from 'typeorm';
import QuizEntity from '../entities/quiz.entity';
import CreatorEntity from 'src/entities/creator.entity';
import QuestionEntity from 'src/entities/question.entity';

@Injectable()
export class QuizService {
  constructor(
    @Inject('QUIZ_REPOSITORY')
    private quizRepository: Repository<QuizEntity>,
  ) {}

  async findMe(creatorId : number): Promise<QuizEntity[]> {
    return this.quizRepository.find({
      where: {
        creatorId,
      }
    });
  }

  async findPublic(isPublic : boolean): Promise<QuizEntity[]> {
    return this.quizRepository.find({
      where: {
        public: isPublic,
      }
    });
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
    quiz.questions = params?.questions?.map(questionDto => {
      const question: QuestionEntity = QuestionEntity.create();
      question.quiz = quiz;
      question.text = questionDto.text;
      question.answers = [];
      return question;
    }) || [];
    quiz.runcodes = [];
    quiz.tags = [];
    return this.quizRepository.save(quiz);
  }
}
