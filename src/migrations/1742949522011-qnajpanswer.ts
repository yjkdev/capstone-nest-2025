import { MigrationInterface, QueryRunner } from "typeorm";

export class Qnajpanswer1742949522011 implements MigrationInterface {
    name = 'Qnajpanswer1742949522011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_qna\` ADD \`jp_answer\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_qna\` DROP COLUMN \`jp_answer\``);
    }

}
