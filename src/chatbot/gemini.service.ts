import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GeminiService {
  private readonly apiKey: string;
  private readonly apiUrl = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash-lite:generateContent';

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('GEMINI_API_KEY') ?? '';
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        `${this.apiUrl}?key=${this.apiKey}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      return response.data.candidates?.[0]?.content?.parts?.[0]?.text || '응답을 생성할 수 없습니다.';
    } catch (error) {
      console.error('Gemini API 요청 오류:', error.response?.data || error.message);
      throw new Error('Google Gemini API 호출 실패');
    }
  }
}