import { Module } from '@nestjs/common';
import { ChatbotController } from './chatbot.controller';
import { GeminiService } from './gemini.service';

@Module({
  controllers: [ChatbotController],
  providers: [GeminiService],
  exports: [GeminiService],
})
export class ChatbotModule {}