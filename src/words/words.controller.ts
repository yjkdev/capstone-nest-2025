import { Controller, Get } from '@nestjs/common';
import { WordsService } from './words.service';
import { Word } from './entities/words.entity';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get() // ✅ 모든 단어 조회 API
  async getAllWords(): Promise<Word[]> {
    return this.wordsService.findAll();
  }
}