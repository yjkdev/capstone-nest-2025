import { MigrationInterface, QueryRunner } from "typeorm";

export class Wbgbhencou1742719200795 implements MigrationInterface {
    name = 'Wbgbhencou1742719200795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`grammar_middle\` CHANGE \`id\` \`grammar_middle_id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`word_middle\` CHANGE \`id\` \`word_middle_id\` int NOT NULL AUTO_INCREMENT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`word_middle\` CHANGE \`word_middle_id\` \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`grammar_middle\` CHANGE \`grammar_middle_id\` \`id\` int NOT NULL AUTO_INCREMENT`);
    }

}
