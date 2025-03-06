import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grammar } from './entities/grammars.entity';
import { GrammarMiddle } from './entities/grammar-middle.entity';
import { GrammarBook } from './entities/grammar-books.entity';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class GrammarsService {
  constructor(
    @InjectRepository(Grammar)
    private grammarRepository: Repository<Grammar>,
    @InjectRepository(Grammar)
    private grammarMiddleRepository: Repository<GrammarMiddle>,
    @InjectRepository(Grammar)
    private grammarBookRepository: Repository<GrammarBook>,
  ) {}

  // 🔥 문법법 관련 비즈니스 로직
  // ✅ 모든 문법 조회 로직(프론트에 넘겨줄 데이터)
  async findAll(): Promise<Grammar[]> {
    return this.grammarRepository.find();
  }
}
