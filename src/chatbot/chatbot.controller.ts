import { Controller, Post, Body } from '@nestjs/common';
import { GeminiService } from './gemini.service';

@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('text-chat')
  async textChat(@Body('message') message: string) {
    const response = await this.geminiService.generateResponse(message);
    return { reply: response };
  }
}