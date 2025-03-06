import { MigrationInterface, QueryRunner } from "typeorm";

export class Grammarhencou1741244075306 implements MigrationInterface {
    name = 'Grammarhencou1741244075306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`grammars\` DROP COLUMN \`grammar_card\``);
        await queryRunner.query(`ALTER TABLE \`grammars\` ADD \`grammar_example\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`grammars\` ADD \`grammar_e_meaning\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`grammars\` ADD \`grammar_s_card\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`grammars\` ADD \`grammar_e_card\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`grammars\` DROP COLUMN \`grammar_e_card\``);
        await queryRunner.query(`ALTER TABLE \`grammars\` DROP COLUMN \`grammar_s_card\``);
        await queryRunner.query(`ALTER TABLE \`grammars\` DROP COLUMN \`grammar_e_meaning\``);
        await queryRunner.query(`ALTER TABLE \`grammars\` DROP COLUMN \`grammar_example\``);
        await queryRunner.query(`ALTER TABLE \`grammars\` ADD \`grammar_card\` text NULL`);
    }

}
