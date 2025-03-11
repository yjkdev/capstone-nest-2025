import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TextToSpeechService {
  private apiKey: string;
  private apiUrl = 'https://api.openai.com/v1/audio/speech';

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('OPENAI_API_KEY') ?? '';
  }

  async synthesizeSpeechToBuffer(text: string): Promise<Buffer> {
    const response = await axios.post(
      this.apiUrl,
      { model: 'tts-1', input: text, voice: 'alloy' },
      { headers: { Authorization: `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' }, responseType: 'arraybuffer' }
    );

    return Buffer.from(response.data); // ✅ 메모리에서 처리
  }
}