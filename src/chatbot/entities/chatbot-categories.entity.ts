import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ChatbotSituation } from './chatbot-situations.entity';

@Entity('chatbot_categories')
export class ChatbotCategory {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  category_name: string;

  @OneToMany(() => ChatbotSituation, (situation) => situation.category)
  situations: ChatbotSituation[];
}