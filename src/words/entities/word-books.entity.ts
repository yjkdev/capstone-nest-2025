import { Entity, PrimaryGeneratedColumn, JoinColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../user/entity/user.entity';
import { WordMiddle } from './word-middle.entity';

@Entity('word_books')
export class WordBook {
  @PrimaryGeneratedColumn()
  wordbook_id: number;

  @ManyToOne(() => User, (user) => user.word_books, { onDelete: 'CASCADE' })
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column({ type: 'varchar', length: 30 })
  wordbook_title: string;

  @OneToMany(() => WordMiddle, (wordMiddle) => wordMiddle.wordbook, { cascade: true, onDelete: 'CASCADE' })
  word_middle: WordMiddle[];
}
