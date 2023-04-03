import { Body, Controller, Get, Param, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/providers/auth.providers';
import { QuizService } from 'src/services/quiz.service';
import { RuncodeDto } from '../dtos/runcode.dto';
import RuncodeEntity from '../entities/runcode.entity';
import { RuncodeService } from '../services/runcode.service';

@Controller()
export class RuncodeController {
  constructor(
    private readonly runcodeService: RuncodeService,
    private readonly quizService: QuizService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get("/runcode/:quizId")
  async getRuncode(@Param('quizId') id: number, @Request() req: any): Promise<RuncodeEntity> {
    const quiz = await this.quizService.findById(id);
    if (quiz?.creator?.id !== req.user.id) {
      throw new UnauthorizedException();
    }
    return this.runcodeService.create(quiz);
  }
  
  @Get("/play/:runCode")
  async play(@Param('runCode') runCode: string): Promise<RuncodeEntity> {
    return this.runcodeService.findByCode(runCode);
  }

  // @Get("/:id")
  // findById(@Param('id') id: number): Promise<RuncodeEntity> {
  //   return this.runcodeService.findById(id)
  // }

  // @Post()
  // create(@Body() runcodeDto: RuncodeDto): Promise<RuncodeEntity> {
  //   return this.runcodeService.create(runcodeDto)
  // }
}

