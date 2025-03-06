import { Injectable } from '@nestjs/common';
import { CreateChatbotDto } from './dto/create-chatbot.dto';
import { UpdateChatbotDto } from './dto/update-chatbot.dto';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ChatbotService {
  private readonly API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  private readonly API_KEY = process.env.GEMININI_API_KEY;

  async getChatbotResponse(message: string): Promise<string> {
    try {
      const response = await fetch(`${this.API_URL}?key=${this.API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: {
            text: message,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`API 요청 실패: ${response.statusText}`);
      }

      const data = await response.json();
      return data?.candidates?.[0]?.content?.text || '응답을 가져오지 못했습니다.';
    } catch (error) {
      console.error('챗봇 API 호출 오류:', error);
      return '오류가 발생했습니다. 다시 시도해주세요.';
    }
  }
}