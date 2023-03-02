import { Inject, Injectable } from "@nestjs/common";
import { QuestionDto } from "src/dtos/question.dto";
import QuizEntity from "src/entities/quiz.entity";
import { Repository } from "typeorm";
import QuestionEntity from '../entities/question.entity';

@Injectable()
export class QuestionService {
    constructor(
        @Inject('QUESTION_REPOSITORY')
        private questionRepository: Repository<QuestionEntity>,
    ) {}
    
    async findAll(): Promise<QuestionEntity[]> {
        return this.questionRepository.find();
    }

    async findById(id: number): Promise<QuestionEntity> {
        return this.questionRepository.findOneBy ({
            id
        })
    }

    async create(params: QuestionDto, quiz: QuizEntity): Promise<QuestionEntity> {
        const question: QuestionEntity = QuestionEntity.create();
        question.text = params.text;
        question.quiz = quiz;
        question.answers = [];
        return this.questionRepository.save(question);
    }
}