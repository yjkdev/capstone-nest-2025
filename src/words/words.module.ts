import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './entities/words.entity';
import { WordBook } from './entities/word-books.entity';
import { WordMiddle } from './entities/word-middle.entity';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Word, WordBook, WordMiddle])],
  providers: [WordsService],
  controllers: [WordsController],
  exports: [WordsService],
})
export class WordsModule {}