import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Word } from './entities/words.entity';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Word])],
  providers: [WordsService],
  controllers: [WordsController],
})
export class WordsModule {}