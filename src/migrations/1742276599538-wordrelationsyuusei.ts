import { MigrationInterface, QueryRunner } from "typeorm";

export class Wordrelationsyuusei1742276599538 implements MigrationInterface {
    name = 'Wordrelationsyuusei1742276599538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`word_books\` DROP FOREIGN KEY \`FK_3487b41bba2a774a39740d43507\``);
        await queryRunner.query(`ALTER TABLE \`word_middle\` DROP FOREIGN KEY \`FK_92e8efcb21736a4c7a9eded5683\``);
        await queryRunner.query(`ALTER TABLE \`word_middle\` DROP FOREIGN KEY \`FK_e947280d5c258502806f27d9316\``);
        await queryRunner.query(`ALTER TABLE \`word_books\` CHANGE \`userUserId\` \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`word_middle\` DROP COLUMN \`wordWordId\``);
        await queryRunner.query(`ALTER TABLE \`word_middle\` DROP COLUMN \`wordbookWordbookId\``);
        await queryRunner.query(`ALTER TABLE \`word_middle\` ADD \`word_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`word_middle\` ADD \`wordbook_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`word_books\` ADD CONSTRAINT \`FK_68929aa14f3fc18fbbd21e5245f\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`word_middle\` ADD CONSTRAINT \`FK_6d290ffcea5ba0d43eee7acb068\` FOREIGN KEY (\`word_id\`) REFERENCES \`words\`(\`word_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`word_middle\` ADD CONSTRAINT \`FK_5d621b35fea227ad7c5bc12bc3f\` FOREIGN KEY (\`wordbook_id\`) REFERENCES \`word_books\`(\`wordbook_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`word_middle\` DROP FOREIGN KEY \`FK_5d621b35fea227ad7c5bc12bc3f\``);
        await queryRunner.query(`ALTER TABLE \`word_middle\` DROP FOREIGN KEY \`FK_6d290ffcea5ba0d43eee7acb068\``);
        await queryRunner.query(`ALTER TABLE \`word_books\` DROP FOREIGN KEY \`FK_68929aa14f3fc18fbbd21e5245f\``);
        await queryRunner.query(`ALTER TABLE \`word_middle\` DROP COLUMN \`wordbook_id\``);
        await queryRunner.query(`ALTER TABLE \`word_middle\` DROP COLUMN \`word_id\``);
        await queryRunner.query(`ALTER TABLE \`word_middle\` ADD \`wordbookWordbookId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`word_middle\` ADD \`wordWordId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`word_books\` CHANGE \`user_id\` \`userUserId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`word_middle\` ADD CONSTRAINT \`FK_e947280d5c258502806f27d9316\` FOREIGN KEY (\`wordbookWordbookId\`) REFERENCES \`word_books\`(\`wordbook_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`word_middle\` ADD CONSTRAINT \`FK_92e8efcb21736a4c7a9eded5683\` FOREIGN KEY (\`wordWordId\`) REFERENCES \`words\`(\`word_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`word_books\` ADD CONSTRAINT \`FK_3487b41bba2a774a39740d43507\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
