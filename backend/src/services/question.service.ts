import { Inject, Injectable } from "@nestjs/common";
import { QuestionDto } from "src/dtos/question.dto";
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

    async create(params: QuestionDto): Promise<Question> {
        const question: Question = new Question();
        question.quiz = params.quiz;
        question.text = params.text;
        return this.questionRepository.save(question);
    }
}