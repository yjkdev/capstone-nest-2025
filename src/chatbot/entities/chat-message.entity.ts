import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ChatLog } from './chat-log.entity';

@Entity('chat_messages')
export class ChatMessage {
  @PrimaryGeneratedColumn()
  message_id: number;

  @ManyToOne(() => ChatLog, (log) => log.chat_messages, { onDelete: 'CASCADE' })
  log: ChatLog;

  @Column({ type: 'text' })
  content_user: string;

  @Column({ type: 'text' })
  content_ai: string;

  @Column({ type: 'int' })
  time: number;
}
