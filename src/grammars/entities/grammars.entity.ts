import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { GrammarMiddle } from './grammar-middle.entity';

@Entity('grammars')
export class Grammar {
  @PrimaryGeneratedColumn()
  grammar_id: number;

  @Column({ type: 'varchar', length: 40 })
  grammar: string;

  @Column({ type: 'varchar', length: 50 })
  grammar_meaning: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  grammar_furigana: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  grammar_level: string;

  @Column({ type: 'text', nullable: true })
  grammar_card: string;

  @Column({ type: 'simple-array', nullable: true })
  grammar_quiz: string[];

  @OneToMany(() => GrammarMiddle, (grammarMiddle) => grammarMiddle.grammar, { cascade: true, onDelete: 'CASCADE' })
  grammar_middle: GrammarMiddle[];
}
