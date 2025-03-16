import { MigrationInterface, QueryRunner } from "typeorm";

export class Chatscenarios1742122937435 implements MigrationInterface {
    name = 'Chatscenarios1742122937435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`chatbot_situations\` (\`situation_id\` int NOT NULL AUTO_INCREMENT, \`scenario_id\` int NOT NULL, \`chatbot_message\` text NOT NULL, \`user_input_message\` text NOT NULL, \`correct_message\` text NOT NULL, \`choice_1\` text NOT NULL, \`choice_2\` text NOT NULL, \`choice_3\` text NOT NULL, \`choice_4\` text NOT NULL, \`is_question\` tinyint NOT NULL DEFAULT 0, \`order_index\` int NOT NULL, \`scenarioScenarioId\` int NULL, PRIMARY KEY (\`situation_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`chatbot_scenarios\` (\`scenario_id\` int NOT NULL AUTO_INCREMENT, \`scenario_name\` varchar(255) NOT NULL, PRIMARY KEY (\`scenario_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` ADD CONSTRAINT \`FK_96169d8245f8b18d85aa66026d3\` FOREIGN KEY (\`scenarioScenarioId\`) REFERENCES \`chatbot_scenarios\`(\`scenario_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`chatbot_situations\` DROP FOREIGN KEY \`FK_96169d8245f8b18d85aa66026d3\``);
        await queryRunner.query(`DROP TABLE \`chatbot_scenarios\``);
        await queryRunner.query(`DROP TABLE \`chatbot_situations\``);
    }

}
