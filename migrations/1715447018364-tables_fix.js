const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class TablesFix1715447018364 {
    name = 'TablesFix1715447018364'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`childrens\` CHANGE \`groupId\` \`groupsId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`childrens\` CHANGE \`groupsId\` \`groupsId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`childrens\` ADD CONSTRAINT \`FK_884952be3fa04bdc4fad7d3504f\` FOREIGN KEY (\`groupsId\`) REFERENCES \`groups\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`childrens\` DROP FOREIGN KEY \`FK_884952be3fa04bdc4fad7d3504f\``);
        await queryRunner.query(`ALTER TABLE \`childrens\` CHANGE \`groupsId\` \`groupsId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`childrens\` CHANGE \`groupsId\` \`groupId\` int NOT NULL`);
    }
}
