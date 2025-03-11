import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import * as FormData from 'form-data';

@Injectable()
export class SpeechToTextService {
  private apiKey: string;
  private apiUrl = 'https://api.openai.com/v1/audio/transcriptions';

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('OPENAI_API_KEY') ?? '';
  }

  async transcribeAudioFromBuffer(buffer: Buffer, retryCount = 3): Promise<string> {
    if (!buffer) {
      throw new Error('파일 버퍼가 존재하지 않습니다.');
    }

    const formData = new FormData();
    formData.append('file', buffer, { filename: 'audio.mp3' });
    formData.append('model', 'whisper-1');

    for (let attempt = 1; attempt <= retryCount; attempt++) {
      try {
        const response = await axios.post(this.apiUrl, formData, {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            ...formData.getHeaders(),
          },
        });

        return response.data.text;
      } catch (error) {
        if (error.response?.status === 429) {
          console.warn(`⚠️ OpenAI API 요청 제한 초과 (429 Too Many Requests) - ${attempt}/${retryCount} 재시도 중...`);
          await new Promise((resolve) => setTimeout(resolve, 3000 * attempt)); // ✅ 재시도 간격 늘리기 (3초 → 6초 → 9초)
        } else {
          throw error;
        }
      }
    }
    throw new Error('OpenAI API 요청 제한 초과. 나중에 다시 시도하세요.');
  }
}