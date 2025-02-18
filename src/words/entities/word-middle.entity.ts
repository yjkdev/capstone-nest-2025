import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Word } from './words.entity';
import { WordBook } from './word-books.entity';

@Entity('word_middle')
export class WordMiddle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Word, (word) => word.word_middle, { onDelete: 'CASCADE' })
  word: Word;

  @ManyToOne(() => WordBook, (wordBook) => wordBook.word_middle, { onDelete: 'CASCADE' })
  wordbook: WordBook;

  @Column({ type: 'date' })
  added_at: Date;
}
