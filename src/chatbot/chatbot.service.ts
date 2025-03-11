import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChatbotService {
  private openai: OpenAI;
  private apiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('OPENAI_API_KEY') ?? '';

    this.openai = new OpenAI({ apiKey: this.apiKey });
  }

  async generateResponse(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // ✅ 무료 모델
      messages: [{ role: 'user', content: prompt }],
    });

    return response.choices[0]?.message?.content || '응답을 생성할 수 없습니다.';
  }
}
