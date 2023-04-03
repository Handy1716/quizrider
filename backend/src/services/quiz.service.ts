import { Injectable, Inject } from '@nestjs/common';
import { QuizDto } from '../dtos/quiz.dto';
import { Repository } from 'typeorm';
import QuizEntity from '../entities/quiz.entity';
import CreatorEntity from 'src/entities/creator.entity';
import QuestionEntity from 'src/entities/question.entity';
import { AnswerDto } from 'src/dtos/answer.dto';
import AnswerEntity from 'src/entities/answer.entity';
import TagEntity from 'src/entities/tag.entity';

@Injectable()
export class QuizService {
  constructor(
    @Inject('QUIZ_REPOSITORY')
    private quizRepository: Repository<QuizEntity>,
    @Inject('TAG_REPOSITORY')
    private tagRepository: Repository<TagEntity>
  ) {}

  async findMe(creatorId : number): Promise<QuizEntity[]> {
    return this.quizRepository.find({
      where: {
        creator: {
          id: creatorId
        }
    }});
  }

  async findPublic(): Promise<QuizEntity[]> {
    return this.quizRepository.find({
      where: {
        public: true,
      }
    });
  }

  async findById(id: number): Promise<QuizEntity> {
    return this.quizRepository.findOneBy({
      id
    })
  }

  async delete(id: number) {
    this.quizRepository.delete(id);
  }

  async create(params: QuizDto, creator: CreatorEntity): Promise<QuizEntity> {
    const quiz: QuizEntity = QuizEntity.create();
    quiz.id = params?.id;
    quiz.name = params.name;
    quiz.public = params.public;
    quiz.oneRound = params.oneRound;
    quiz.creator = creator;
    quiz.questions = params?.questions?.map(questionDto => {
      const question: QuestionEntity = QuestionEntity.create();
      question.quiz = quiz;
      question.text = questionDto.text;
      question.answers = questionDto?.answers?.map(answerDto => {
        const answer: AnswerEntity = AnswerEntity.create();
        answer.question = question;
        answer.text = answerDto.text;
        answer.rightAnswer = answerDto.rightAnswer;
        return answer;
      }) || [];
      return question;
    }) || [];
    quiz.runcodes = [];
    quiz.tags = await Promise.all(params?.tags?.map(async tagDto => {
      const tag: TagEntity = TagEntity.create();
      tag.text = tagDto.text;
      let tagEntity = await this.tagRepository.findOneBy({ text: tag.text });
      if (!tagEntity) {
        tagEntity = await this.tagRepository.save(tag);
      }
      return tagEntity;
    })) || [];
    return this.quizRepository.save(quiz);
  }
}
