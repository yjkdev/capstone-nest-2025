import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Grammar } from './grammars.entity';
import { GrammarBook } from './grammar-books.entity';

@Entity('grammar_middle')
export class GrammarMiddle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Grammar, (grammar) => grammar.grammar_middle, { onDelete: 'CASCADE' })
  grammar: Grammar;

  @ManyToOne(() => GrammarBook, (grammarBook) => grammarBook.grammar_middle, { onDelete: 'CASCADE' })
  grammarbook: GrammarBook;

  @Column({ type: 'date' })
  added_at: Date;
}
