import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Word } from './words.entity';
import { WordBook } from './word-books.entity';

@Entity('word_middle')
export class WordMiddle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Word, (word) => word.word_middle, { onDelete: 'CASCADE' })
  @JoinColumn({ name: "word_id" })
  word: Word;

  @ManyToOne(() => WordBook, (wordBook) => wordBook.word_middle, { onDelete: 'CASCADE' })
  @JoinColumn({ name: "wordbook_id" })
  wordbook: WordBook;

  @Column({ type: 'date' })
  added_at: Date;
}
