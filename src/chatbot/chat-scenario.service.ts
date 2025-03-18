import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatbotScenario} from './entities/chatbot-scenarios.entity'
import { ChatbotSituation } from './entities/chatbot-situations.entity';

@Injectable()
export class ChatScenarioService {
  constructor(
    @InjectRepository(ChatbotScenario)
    private readonly ChatbotScenarioRepo: Repository<ChatbotScenario>,
    @InjectRepository(ChatbotSituation)
    private readonly chatbotSituationRepo: Repository<ChatbotSituation>,
  ) {}

  // 🔥 상황별 대화 관련
  // ✅ 모든 시나리오 조회 로직(프론트에 넘겨줄 데이터)
  async findAll(): Promise<ChatbotScenario[]> {
    return this.ChatbotScenarioRepo.find();
  }

  // ✅ 특정 시나리오의 첫 번째 대화 단계 가져오기
  async getScenario(scenarioId: number) {
    return await this.chatbotSituationRepo.findOne({
      where: { scenario_id: scenarioId },
      order: { order_index: 'ASC' }, // 첫 번째 단계 가져오기
    });
  }

  // ✅ 특정 대화 단계 가져오기
  async getStep(scenarioId: number, orderIndex: number) {
    return await this.chatbotSituationRepo.findOne({
      where: { scenario: { scenario_id: scenarioId }, order_index: orderIndex },
    });
  }

  // ✅ 유저 선택값 검증 및 다음 단계 진행
  async checkAnswer(situationId: number, selectedChoice: string) {
    const situation = await this.chatbotSituationRepo.findOne({
        where: { situation_id: situationId },
    });

    if (!situation) {
        return { success: false, message: "잘못된 요청입니다." };
    }

    // 유저 선택값을 문제 메시지에 적용
    const completedMessage = situation.user_input_message.replace("______", selectedChoice);

    // 정답인지 확인
    if (completedMessage === situation.correct_message) {
        const nextStep = await this.chatbotSituationRepo.findOne({
            where: { scenario_id: situation.scenario_id, order_index: situation.order_index + 1 },
        });

        return { 
            success: true, 
            message: "정답입니다!", 
            explanation: situation.correct_explanation, // ✅ 정답 설명 추가
            nextStep 
        };
    } else {
        // 유저가 선택한 오답이 몇 번째 오답인지 찾기
        let explanation = "오답입니다. 다시 선택하세요。";
        if (selectedChoice === situation.choice_1) {
            explanation = situation.wrong_explanation_1;
        } else if (selectedChoice === situation.choice_2) {
            explanation = situation.wrong_explanation_2;
        } else if (selectedChoice === situation.choice_3) {
            explanation = situation.wrong_explanation_3;
        }
        return { 
            success: false, 
            message: "틀렸습니다. 다시 선택하세요。",
            explanation // ✅ 선택한 오답에 맞는 설명 반환
        };
    }
  }
}