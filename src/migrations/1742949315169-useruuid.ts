import { MigrationInterface, QueryRunner } from "typeorm";

export class Useruuid1742949315169 implements MigrationInterface {
    name = 'Useruuid1742949315169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`uuid\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_a95e949168be7b7ece1a2382fe\` (\`uuid\`)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`password\` \`password\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`password\` \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_a95e949168be7b7ece1a2382fe\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`uuid\``);
    }

}
