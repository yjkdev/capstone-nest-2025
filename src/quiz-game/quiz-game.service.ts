import { Injectable } from '@nestjs/common';
import { CreateQuizGameDto } from './dto/create-quiz-game.dto';
import { UpdateQuizGameDto } from './dto/update-quiz-game.dto';

@Injectable()
export class QuizGameService {
  create(createQuizGameDto: CreateQuizGameDto) {
    return 'This action adds a new quizGame';
  }

  findAll() {
    return `This action returns all quizGame`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quizGame`;
  }

  update(id: number, updateQuizGameDto: UpdateQuizGameDto) {
    return `This action updates a #${id} quizGame`;
  }

  remove(id: number) {
    return `This action removes a #${id} quizGame`;
  }
}
