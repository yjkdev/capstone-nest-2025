import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { GrammarMiddle } from './grammar-middle.entity';

@Entity('grammars')
export class Grammar {
  @PrimaryGeneratedColumn()
  grammar_id: number;

  @Column({ type: 'varchar', length: 50 })
  grammar: string;

  @Column({ type: 'varchar', length: 50 })
  grammar_meaning: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  grammar_furigana: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  grammar_level: string;

  @Column({type: 'varchar', length: 100})
  grammar_example: string;

  @Column({type: 'varchar', length: 100})
  grammar_e_meaning: string;

  @Column({ type: 'simple-array', nullable: true })
  grammar_s_card: string[];

  @Column({ type: 'simple-array', nullable: true })
  grammar_e_card: string[];

  @Column({ type: 'simple-array', nullable: true })
  grammar_quiz: string[];

  @OneToMany(() => GrammarMiddle, (grammarMiddle) => grammarMiddle.grammar, { cascade: true, onDelete: 'CASCADE' })
  grammar_middle: GrammarMiddle[];
}
