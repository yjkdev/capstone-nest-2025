import { MigrationInterface, QueryRunner } from "typeorm";

export class N1200dummydb1740577943611 implements MigrationInterface {
    name = 'N1200dummydb1740577943611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`phone\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`phone\` varchar(30) NULL`);
    }

}
