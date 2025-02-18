import { Test, TestingModule } from '@nestjs/testing';
import { GrammarsController } from './grammars.controller';
import { GrammarsService } from './grammars.service';

describe('GrammarsController', () => {
  let controller: GrammarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrammarsController],
      providers: [GrammarsService],
    }).compile();

    controller = module.get<GrammarsController>(GrammarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
