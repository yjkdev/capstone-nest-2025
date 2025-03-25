import { MigrationInterface, QueryRunner } from "typeorm";

export class Chatsituationhencou1742517952664 implements MigrationInterface {
    name = 'Chatsituationhencou1742517952664'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP FOREIGN KEY \`FK_e9748d48d396ad83bbb64fa8a1b\``);
        await queryRunner.query(`CREATE TABLE \`chatbot_categories\` (\`category_id\` int NOT NULL AUTO_INCREMENT, \`category_name\` varchar(50) NOT NULL, PRIMARY KEY (\`category_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`chatbot_qna\` (\`qna_id\` int NOT NULL AUTO_INCREMENT, \`situation_id\` int NOT NULL, \`chatbot_question\` varchar(255) NOT NULL, \`kr_answer\` varchar(255) NOT NULL, \`blank_answer\` varchar(255) NOT NULL, \`order_index\` int NOT NULL, \`choices\` json NOT NULL, PRIMARY KEY (\`qna_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`chatbot_message\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`choice_1\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`choice_2\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`choice_3\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`choice_4\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`correct_explanation\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`correct_kr_message\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`correct_message\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`is_question\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`order_index\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`scenario_id\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`user_input_message\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`wrong_explanation_1\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`wrong_explanation_2\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`wrong_explanation_3\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`category_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`situation_name\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_qna\` ADD CONSTRAINT \`FK_21adbe38a847356ae649cf0a9f1\` FOREIGN KEY (\`situation_id\`) REFERENCES \`chatbot_situations\`(\`situation_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD CONSTRAINT \`FK_5db70a81355d038f12909aad109\` FOREIGN KEY (\`category_id\`) REFERENCES \`chatbot_categories\`(\`category_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE IF EXISTS chatbot_scenarios`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP FOREIGN KEY \`FK_5db70a81355d038f12909aad109\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_qna\` DROP FOREIGN KEY \`FK_21adbe38a847356ae649cf0a9f1\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`situation_name\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`category_id\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`wrong_explanation_3\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`wrong_explanation_2\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`wrong_explanation_1\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`user_input_message\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`scenario_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`order_index\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`is_question\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`correct_message\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`correct_kr_message\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`correct_explanation\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`choice_4\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`choice_3\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`choice_2\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`choice_1\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`chatbot_message\` text NOT NULL`);
        await queryRunner.query(`DROP TABLE \`chatbot_qna\``);
        await queryRunner.query(`DROP TABLE \`chatbot_categories\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD CONSTRAINT \`FK_e9748d48d396ad83bbb64fa8a1b\` FOREIGN KEY (\`scenario_id\`) REFERENCES \`chatbot_scenarios\`(\`scenario_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
