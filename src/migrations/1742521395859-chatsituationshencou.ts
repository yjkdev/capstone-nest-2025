import { MigrationInterface, QueryRunner } from "typeorm";

export class Chatsituationshencou1742521395859 implements MigrationInterface {
    name = 'Chatsituationshencou1742521395859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_qna\` CHANGE \`choices\` \`choice_list\` json NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_qna\` CHANGE \`choice_list\` \`choices\` json NOT NULL`);
    }

}
