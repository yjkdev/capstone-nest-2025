import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../user/entity/user.entity';
import { ChatMessage } from './chat-message.entity';

@Entity('chat_logs')
export class ChatLog {
  @PrimaryGeneratedColumn()
  log_id: number;

  @ManyToOne(() => User, (user) => user.chat_logs, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => ChatMessage, (chatMessage) => chatMessage.log, { cascade: true, onDelete: 'CASCADE' })
  chat_messages: ChatMessage[];
}
