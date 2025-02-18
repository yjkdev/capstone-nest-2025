import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizGameService } from './quiz-game.service';
import { CreateQuizGameDto } from './dto/create-quiz-game.dto';
import { UpdateQuizGameDto } from './dto/update-quiz-game.dto';

@Controller('quiz-game')
export class QuizGameController {
  constructor(private readonly quizGameService: QuizGameService) {}

  @Post()
  create(@Body() createQuizGameDto: CreateQuizGameDto) {
    return this.quizGameService.create(createQuizGameDto);
  }

  @Get()
  findAll() {
    return this.quizGameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizGameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizGameDto: UpdateQuizGameDto) {
    return this.quizGameService.update(+id, updateQuizGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizGameService.remove(+id);
  }
}
