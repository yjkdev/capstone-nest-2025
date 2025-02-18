import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../auth/entity/user.entity';
import { Word } from '../../words/entities/words.entity';
import { Grammar } from '../../grammars/entities/grammars.entity';

@Entity('quiz_games')
export class QuizGame {
  @PrimaryGeneratedColumn()
  room_id: number;

  @ManyToOne(() => User, (user) => user.quiz_games, { onDelete: 'CASCADE' })
  ex_user: User;

  @ManyToOne(() => Word, { nullable: true, onDelete: 'SET NULL' })
  word: Word;

  @ManyToOne(() => Grammar, { nullable: true, onDelete: 'SET NULL' })
  grammar: Grammar;

  @Column({ type: 'varchar', length: 10 })
  room_name: string;

  @Column({ type: 'int', default: 0 })
  game_current: number;

  @Column({ type: 'int', default: 0 })
  quiz_index: number;

  @Column({ type: 'simple-array', nullable: true })
  quiz_box: string[];
}
