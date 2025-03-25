import { MigrationInterface, QueryRunner } from "typeorm";

export class Userhencou1741140661628 implements MigrationInterface {
    name = 'Userhencou1741140661628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email_verified\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`google_id\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`social_check\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`social_check\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`google_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email_verified\` tinyint NOT NULL DEFAULT '0'`);
    }

}
