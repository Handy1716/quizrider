import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { QuestionDto } from '../dtos/question.dto';
import QuestionEntity from "../entities/question.entity";
import { QuestionService } from '../services/question.service';




@Controller("/question")
export class QuestionController {
  constructor(
      private readonly questionService: QuestionService
  ) {}

  @Get("/:id")
  findById(@Param('id') id: number): Promise<QuestionEntity> {
    return this.questionService.findById(id)
  }

  // @Post()
  // create(@Body() questionDto: QuestionDto): Promise<QuestionEntity> {
  //   return this.questionService.create(questionDto)
  // }
}