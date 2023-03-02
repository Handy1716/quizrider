import { Inject, Injectable } from "@nestjs/common";
import { QuestionDto } from "src/dtos/question.dto";
import Quiz from "src/entities/quiz.entity";
import { Repository } from "typeorm";
import Question from '../entities/question.entity';

@Injectable()
export class QuestionService {
    constructor(
        @Inject('QUESTION_REPOSITORY')
        private questionRepository: Repository<Question>,
    ) {}
    
    async findAll(): Promise<Question[]> {
        return this.questionRepository.find();
    }

    async findById(id: number): Promise<Question> {
        return this.questionRepository.findOneBy ({
            id
        })
    }

    async create(params: QuestionDto, quiz: Quiz): Promise<Question> {
        const question: Question = new Question();
        question.quiz = quiz;
        question.text = params.text;
        return this.questionRepository.save(question);
    }
}