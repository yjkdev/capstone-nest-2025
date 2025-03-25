import { MigrationInterface, QueryRunner } from "typeorm";

export class Chatsituationsaddkr1742280308628 implements MigrationInterface {
    name = 'Chatsituationsaddkr1742280308628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`correct_kr_message\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`correct_kr_message\``);
    }

}
