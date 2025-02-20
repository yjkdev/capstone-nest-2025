import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../auth/entity/user.entity';
import { GrammarMiddle } from './grammar-middle.entity';

@Entity('grammar_books')
export class GrammarBook {
  @PrimaryGeneratedColumn()
  grammarbook_id: number;

  @ManyToOne(() => User, (user) => user.grammar_books, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'varchar', length: 30 })
  grammarbook_title: string;

  @OneToMany(() => GrammarMiddle, (grammarMiddle) => grammarMiddle.grammarbook, { cascade: true, onDelete: 'CASCADE' })
  grammar_middle: GrammarMiddle[];
}
