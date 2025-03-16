import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ChatbotScenario } from "./chatbot-scenarios.entity";

@Entity("chatbot_situations")
export class ChatbotSituation {
    @PrimaryGeneratedColumn()
    situation_id: number;

    @Column()
    scenario_id: number;

    @ManyToOne(() => ChatbotScenario, (scenario) => scenario.situations, { onDelete: "CASCADE" })
    scenario: ChatbotScenario;

    @Column({ type: "text" })
    chatbot_message: string; // 챗봇 메시지

    @Column({ type: "text" })
    user_input_message: string; // 빈칸이 포함된 문제 메시지

    @Column({ type: "text" })
    correct_message: string; // 정답 메시지 (빈칸이 채워진 최종 정답)

    @Column({ type: "text" })
    choice_1: string; // 선택지 1

    @Column({ type: "text" })
    choice_2: string; // 선택지 2

    @Column({ type: "text" })
    choice_3: string; // 선택지 3

    @Column({ type: "text" })
    choice_4: string; // 선택지 4

    @Column({ type: "boolean", default: false })
    is_question: boolean; // 빈칸 문제 여부

    @Column()
    order_index: number; // 대화 순서
}