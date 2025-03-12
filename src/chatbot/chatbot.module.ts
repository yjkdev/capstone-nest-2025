import { Module } from '@nestjs/common';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service'
import { SpeechToTextService } from './speech-to-text.service';
import { TextToSpeechService } from './text-to-speech.service';

@Module({
  controllers: [ChatbotController],
  providers: [ChatbotService, SpeechToTextService, TextToSpeechService],
  exports: [ChatbotService, SpeechToTextService, TextToSpeechService],
})
export class ChatbotModule {}