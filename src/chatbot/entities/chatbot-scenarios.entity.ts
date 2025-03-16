import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ChatbotSituation } from "./chatbot-situations.entity";

@Entity("chatbot_scenarios")
export class ChatbotScenario {
    @PrimaryGeneratedColumn()
    scenario_id: number;

    @Column()
    scenario_name: string;

    @OneToMany(() => ChatbotSituation, (situation) => situation.scenario)
    situations: ChatbotSituation[];
}