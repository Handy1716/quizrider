import { Injectable, Inject } from '@nestjs/common';
import { ScoreboardAnswerDto, ScoreboardDto } from '../dtos/scoreboard.dto';
import { Repository } from 'typeorm';
import ScoreboardEntity from '../entities/scoreboard.entity';
import RuncodeEntity from 'src/entities/runcode.entity';
import QuestionEntity from 'src/entities/question.entity';

@Injectable()
export class ScoreboardService {
  constructor(
    @Inject('SCOREBOARD_REPOSITORY')
    private scoreboardRepository: Repository<ScoreboardEntity>,
  ) {}

  async findAll(): Promise<ScoreboardEntity[]> {
    return this.scoreboardRepository.find();
  }

  async findById(id: number): Promise<ScoreboardEntity> {
    return this.scoreboardRepository.findOneBy({
      id
    })
  }

  async create(params: ScoreboardDto, runCode: RuncodeEntity): Promise<ScoreboardEntity> {
    const scoreboard: ScoreboardEntity = ScoreboardEntity.create();
    scoreboard.deviceId = params.deviceId;
    scoreboard.name = params.name;
    scoreboard.points = this.calculatePoints(params.answers, runCode.quiz.questions);
    scoreboard.runCode = runCode;
    return this.scoreboardRepository.save(scoreboard);
  }

  private calculatePoints(results: ScoreboardAnswerDto[], questions: QuestionEntity[]): number {
    let points = 0;
    let time = 0;
    results.forEach((result) => {
      time += result.time;
      const question = questions.find((question) => question.id === result.questionId);
      if (question) {
        const answer = question.answers.find((answer) => answer.id === result.answerId);
        if (answer) {
          if (answer.rightAnswer) {
            points++;
          }
        }
      }
    });
    points = Math.round(((60 * 30) - (time/1000)) * points);
    return points;
  }

  async findByQuiz(quizId: number): Promise<ScoreboardEntity[]> {
    return this.scoreboardRepository.find({
      where: {
        runCode: {
          quiz: {
            id: quizId
          }
        }
      },
      order: {
        points: "DESC",
        finishTime: "ASC"
      }
    })
  }

}
