import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SpeechToTextService {
  private readonly apiKey: string;
  private readonly apiUrl = 'https://speech.googleapis.com/v1/speech:recognize';

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('GOOGLE_API_KEY') ?? '';
  }

  async transcribeAudio(audioBuffer: Buffer): Promise<string> {
    if (!audioBuffer) {
      throw new Error('파일 버퍼가 존재하지 않습니다.');
    }

    const audioData = audioBuffer.toString('base64');

    const response = await axios.post(
      `${this.apiUrl}?key=${this.apiKey}`,
      {
        config: { encoding: 'LINEAR16', sampleRateHertz: 16000, languageCode: 'ja-JP' },
        audio: { content: audioData }
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    return response.data.results?.[0]?.alternatives?.[0]?.transcript || '음성을 인식할 수 없습니다.';
  }
}