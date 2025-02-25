import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Word } from './entities/words.entity';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(Word)
    private wordsRepository: Repository<Word>,
  ) {}

  // ✅ 모든 단어 조회 (프론트에 넘겨줄 데이터)
  async findAll(): Promise<Word[]> {
    return this.wordsRepository.find();
  }
}