import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TextToSpeechService {
  private readonly apiKey: string;
  private readonly apiUrl = 'https://texttospeech.googleapis.com/v1/text:synthesize';

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('GOOGLE_API_KEY') ?? ''
  }

  async synthesizeSpeech(text: string, outputPath: string): Promise<void> {
    const response = await axios.post(
      `${this.apiUrl}?key=${this.apiKey}`,
      {
        input: { text },
        voice: { languageCode: 'ja-JP', ssmlGender: 'FEMALE' },
        audioConfig: { audioEncoding: 'LINEAR16' }
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    fs.writeFileSync(outputPath, Buffer.from(response.data.audioContent, 'base64'));
  }
}