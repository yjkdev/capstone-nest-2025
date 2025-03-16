import { Controller, Param, Post, Get, Body, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ChatbotService } from './chatbot.service';
import { SpeechToTextService } from './speech-to-text.service';
import { TextToSpeechService } from './text-to-speech.service';
import { ChatScenarioService } from './chat-scenario.service';
import { Response } from 'express';
import { memoryStorage } from 'multer';

@Controller('chatbot')
export class ChatbotController {
  constructor(
    private readonly chatbotService: ChatbotService,
    private readonly speechToTextService: SpeechToTextService,
    private readonly textToSpeechService: TextToSpeechService,
    private readonly chatScenarioService: ChatScenarioService
  ) {}

  // 🔥 제미니 챗봇 관련
  @Post('text-chat')
  async textChat(@Body('message') message: string) {
    const response = await this.chatbotService.generateResponse(message);
    return { reply: response };
  }

  @Post('voice-chat')
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() })) // ✅ 메모리 저장 방식 사용
  async voiceChat(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      console.log('📂 업로드된 파일 정보:', file);

      if (!file || !file.buffer) {
        return res.status(400).json({ error: '파일이 업로드되지 않았거나 데이터가 없습니다.' });
      }

      // 1. 음성을 텍스트로 변환 (STT)
      const text = await this.speechToTextService.transcribeAudio(file.buffer);
      console.log(`📝 변환된 텍스트: ${text}`);

      // 2. AI 응답 생성 (Gemini API)
      const aiResponse = await this.chatbotService.generateResponse(text);
      console.log(`🤖 AI 응답: ${aiResponse}`);

      // 3. 응답을 음성으로 변환 (TTS)
      const audioPath = `output_${Date.now()}.mp3`;
      await this.textToSpeechService.synthesizeSpeech(aiResponse, audioPath);

      // 4. 변환된 음성 파일 반환
      res.sendFile(audioPath, { root: '.' });
    } catch (error) {
      console.error('❌ 음성 챗봇 오류:', error);
      res.status(500).json({ error: '음성 챗봇 처리 중 오류 발생' });
    }
  }

  // 🔥 상황별 대화 관련
  // ✅ 특정 시나리오의 첫 번째 대화 단계 가져오기
  @Get('scenario/:scenarioId')
  async getScenario(@Param('scenarioId') scenarioId: number) {
    return await this.chatScenarioService.getScenario(scenarioId);
  }

  // ✅ 특정 대화 단계 가져오기
  @Get('step/:orderIndex')
  async getStep(
    @Param('orderIndex') orderIndex: number, 
    @Body('scenarioId') scenarioId: number
  ) {
    return await this.chatScenarioService.getStep(scenarioId, orderIndex);
  }

  // ✅ 유저 입력값 검증 및 다음 단계 진행
  @Post('check-answer/:situationId')
  async checkAnswer(
    @Param('situationId') situationId: number, 
    @Body('selectedChoice') selectedChoice: string
  ) {
    return await this.chatScenarioService.checkAnswer(situationId, selectedChoice);
  }
}