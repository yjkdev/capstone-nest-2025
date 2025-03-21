import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service';
import { SpeechToTextService } from './speech-to-text.service';
import { TextToSpeechService } from './text-to-speech.service';
import { ChatQnAService } from './chatbot-qna.service';
import { ChatbotCategory } from './entities/chatbot-categories.entity';
import { ChatbotSituation } from './entities/chatbot-situations.entity';
import { ChatbotQna } from './entities/chatbot-qna.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatbotCategory, ChatbotSituation, ChatbotQna])],
  controllers: [ChatbotController],
  providers: [ChatbotService, SpeechToTextService, TextToSpeechService, ChatQnAService],
  exports: [ChatbotService, SpeechToTextService, TextToSpeechService, ChatQnAService],
})
export class ChatbotModule {}