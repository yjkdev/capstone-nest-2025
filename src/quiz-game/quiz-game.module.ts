import { Module } from '@nestjs/common';
import { QuizGameService } from './quiz-game.service';
import { QuizGameController } from './quiz-game.controller';

@Module({
  controllers: [QuizGameController],
  providers: [QuizGameService],
})
export class QuizGameModule {}
