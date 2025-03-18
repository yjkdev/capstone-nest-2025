import { MigrationInterface, QueryRunner } from "typeorm";

export class Chatsituationsaddfeedback1742269239811 implements MigrationInterface {
    name = 'Chatsituationsaddfeedback1742269239811'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP FOREIGN KEY \`FK_96169d8245f8b18d85aa66026d3\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`scenarioScenarioId\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`correct_explanation\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`wrong_explanation_1\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`wrong_explanation_2\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`wrong_explanation_3\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD CONSTRAINT \`FK_e9748d48d396ad83bbb64fa8a1b\` FOREIGN KEY (\`scenario_id\`) REFERENCES \`chatbot_scenarios\`(\`scenario_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP FOREIGN KEY \`FK_e9748d48d396ad83bbb64fa8a1b\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`wrong_explanation_3\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`wrong_explanation_2\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`wrong_explanation_1\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP COLUMN \`correct_explanation\``);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD \`scenarioScenarioId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD CONSTRAINT \`FK_96169d8245f8b18d85aa66026d3\` FOREIGN KEY (\`scenarioScenarioId\`) REFERENCES \`chatbot_scenarios\`(\`scenario_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
