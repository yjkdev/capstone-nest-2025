import { Test, TestingModule } from '@nestjs/testing';
import { QuizGameController } from './quiz-game.controller';
import { QuizGameService } from './quiz-game.service';

describe('QuizGameController', () => {
  let controller: QuizGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizGameController],
      providers: [QuizGameService],
    }).compile();

    controller = module.get<QuizGameController>(QuizGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
