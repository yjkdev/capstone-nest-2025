import { Entity, PrimaryGeneratedColumn, JoinColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { ChatbotCategory } from './chatbot-categories.entity';
import { ChatbotQna } from './chatbot-qna.entity';

@Entity('chatbot_situations')
export class ChatbotSituation {
  @PrimaryGeneratedColumn()
  situation_id: number;

  @Column()
  category_id: number;

  @ManyToOne(() => ChatbotCategory, (category) => category.situations, { onDelete: 'CASCADE' })
  @JoinColumn({ name: "category_id" })
  category: ChatbotCategory;

  @Column({ type: 'varchar', length: 50, nullable: false })
  situation_name: string;

  @OneToMany(() => ChatbotQna, (qna) => qna.situation)
  questions: ChatbotQna[];
}