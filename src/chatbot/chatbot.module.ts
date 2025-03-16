import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service'
import { SpeechToTextService } from './speech-to-text.service';
import { TextToSpeechService } from './text-to-speech.service';
import { ChatScenarioService } from './chat-scenario.service';
import { ChatbotSituation } from './entities/chatbot-situations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatbotSituation]),],
  controllers: [ChatbotController],
  providers: [ChatbotService, SpeechToTextService, TextToSpeechService, ChatScenarioService,],
  exports: [ChatbotService, SpeechToTextService, TextToSpeechService, ChatScenarioService,],
})
export class ChatbotModule {}