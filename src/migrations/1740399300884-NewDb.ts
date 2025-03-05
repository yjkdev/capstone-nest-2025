import { MigrationInterface, QueryRunner } from "typeorm";

// export class NewDb1740399300884 implements MigrationInterface {
//     name = 'NewDb1740399300884'

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`CREATE TABLE \`grammars\` (\`grammar_id\` int NOT NULL AUTO_INCREMENT, \`grammar\` varchar(50) NOT NULL, \`grammar_meaning\` varchar(50) NOT NULL, \`grammar_furigana\` varchar(50) NULL, \`grammar_level\` varchar(10) NULL, \`grammar_card\` text NULL, \`grammar_quiz\` text NULL, PRIMARY KEY (\`grammar_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`grammar_middle\` (\`id\` int NOT NULL AUTO_INCREMENT, \`added_at\` date NOT NULL, \`grammarGrammarId\` int NULL, \`grammarbookGrammarbookId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`grammar_books\` (\`grammarbook_id\` int NOT NULL AUTO_INCREMENT, \`grammarbook_title\` varchar(30) NOT NULL, \`userUserId\` int NULL, PRIMARY KEY (\`grammarbook_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`word_middle\` (\`id\` int NOT NULL AUTO_INCREMENT, \`added_at\` date NOT NULL, \`wordWordId\` int NULL, \`wordbookWordbookId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`words\` (\`word_id\` int NOT NULL AUTO_INCREMENT, \`word\` varchar(50) NOT NULL, \`word_meaning\` varchar(50) NOT NULL, \`word_furigana\` varchar(50) NULL, \`word_level\` varchar(10) NULL, \`word_quiz\` text NULL, PRIMARY KEY (\`word_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`quiz_games\` (\`room_id\` int NOT NULL AUTO_INCREMENT, \`room_name\` varchar(30) NOT NULL, \`game_current\` int NOT NULL DEFAULT '0', \`quiz_index\` int NOT NULL DEFAULT '0', \`quiz_box\` text NULL, \`exUserUserId\` int NULL, \`wordWordId\` int NULL, \`grammarGrammarId\` int NULL, PRIMARY KEY (\`room_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`chat_messages\` (\`message_id\` int NOT NULL AUTO_INCREMENT, \`content_user\` text NOT NULL, \`content_ai\` text NOT NULL, \`time\` int NOT NULL, \`logLogId\` int NULL, PRIMARY KEY (\`message_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`chat_logs\` (\`log_id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`userUserId\` int NULL, PRIMARY KEY (\`log_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`user\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(30) NOT NULL, \`email\` varchar(100) NOT NULL, \`password\` varchar(255) NOT NULL, \`phone\` varchar(30) NULL, \`profile_image\` text NULL, \`email_verified\` tinyint NOT NULL DEFAULT 0, \`google_id\` varchar(255) NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`word_books\` (\`wordbook_id\` int NOT NULL AUTO_INCREMENT, \`wordbook_title\` varchar(30) NOT NULL, \`userUserId\` int NULL, PRIMARY KEY (\`wordbook_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`ALTER TABLE \`grammar_middle\` ADD CONSTRAINT \`FK_ab90a2fa57e45627c57b491a65a\` FOREIGN KEY (\`grammarGrammarId\`) REFERENCES \`grammars\`(\`grammar_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`grammar_middle\` ADD CONSTRAINT \`FK_001103f0c7742cff4c5605d6e01\` FOREIGN KEY (\`grammarbookGrammarbookId\`) REFERENCES \`grammar_books\`(\`grammarbook_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`grammar_books\` ADD CONSTRAINT \`FK_edabcada86205b5ccc32860407e\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`word_middle\` ADD CONSTRAINT \`FK_92e8efcb21736a4c7a9eded5683\` FOREIGN KEY (\`wordWordId\`) REFERENCES \`words\`(\`word_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`word_middle\` ADD CONSTRAINT \`FK_e947280d5c258502806f27d9316\` FOREIGN KEY (\`wordbookWordbookId\`) REFERENCES \`word_books\`(\`wordbook_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`quiz_games\` ADD CONSTRAINT \`FK_5ea4c60862dadbb61b1a595dd8e\` FOREIGN KEY (\`exUserUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`quiz_games\` ADD CONSTRAINT \`FK_fb63d4ec3321a98409195adf818\` FOREIGN KEY (\`wordWordId\`) REFERENCES \`words\`(\`word_id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`quiz_games\` ADD CONSTRAINT \`FK_b831c403017694f26374643d94d\` FOREIGN KEY (\`grammarGrammarId\`) REFERENCES \`grammars\`(\`grammar_id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`chat_messages\` ADD CONSTRAINT \`FK_9ea3ce40cae4902fabbeec7d25b\` FOREIGN KEY (\`logLogId\`) REFERENCES \`chat_logs\`(\`log_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`chat_logs\` ADD CONSTRAINT \`FK_6c8ee5d5aa6748e5ec9456ddfb0\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`word_books\` ADD CONSTRAINT \`FK_3487b41bba2a774a39740d43507\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`ALTER TABLE \`word_books\` DROP FOREIGN KEY \`FK_3487b41bba2a774a39740d43507\``);
//         await queryRunner.query(`ALTER TABLE \`chat_logs\` DROP FOREIGN KEY \`FK_6c8ee5d5aa6748e5ec9456ddfb0\``);
//         await queryRunner.query(`ALTER TABLE \`chat_messages\` DROP FOREIGN KEY \`FK_9ea3ce40cae4902fabbeec7d25b\``);
//         await queryRunner.query(`ALTER TABLE \`quiz_games\` DROP FOREIGN KEY \`FK_b831c403017694f26374643d94d\``);
//         await queryRunner.query(`ALTER TABLE \`quiz_games\` DROP FOREIGN KEY \`FK_fb63d4ec3321a98409195adf818\``);
//         await queryRunner.query(`ALTER TABLE \`quiz_games\` DROP FOREIGN KEY \`FK_5ea4c60862dadbb61b1a595dd8e\``);
//         await queryRunner.query(`ALTER TABLE \`word_middle\` DROP FOREIGN KEY \`FK_e947280d5c258502806f27d9316\``);
//         await queryRunner.query(`ALTER TABLE \`word_middle\` DROP FOREIGN KEY \`FK_92e8efcb21736a4c7a9eded5683\``);
//         await queryRunner.query(`ALTER TABLE \`grammar_books\` DROP FOREIGN KEY \`FK_edabcada86205b5ccc32860407e\``);
//         await queryRunner.query(`ALTER TABLE \`grammar_middle\` DROP FOREIGN KEY \`FK_001103f0c7742cff4c5605d6e01\``);
//         await queryRunner.query(`ALTER TABLE \`grammar_middle\` DROP FOREIGN KEY \`FK_ab90a2fa57e45627c57b491a65a\``);
//         await queryRunner.query(`DROP TABLE \`word_books\``);
//         await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
//         await queryRunner.query(`DROP TABLE \`user\``);
//         await queryRunner.query(`DROP TABLE \`chat_logs\``);
//         await queryRunner.query(`DROP TABLE \`chat_messages\``);
//         await queryRunner.query(`DROP TABLE \`quiz_games\``);
//         await queryRunner.query(`DROP TABLE \`words\``);
//         await queryRunner.query(`DROP TABLE \`word_middle\``);
//         await queryRunner.query(`DROP TABLE \`grammar_books\``);
//         await queryRunner.query(`DROP TABLE \`grammar_middle\``);
//         await queryRunner.query(`DROP TABLE \`grammars\``);
//     }

// }

export class UpdateUserTable1740399300885 implements MigrationInterface {
    name = 'UpdateUserTable1740399300885'

    public async up(queryRunner: QueryRunner): Promise<void> {

        // 'google_id' 컬럼 제거
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`phone\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // 변경 사항 롤백
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`phone\` varchar(30) NULL`);
    }
}