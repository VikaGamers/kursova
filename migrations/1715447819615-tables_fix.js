const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class TablesFix1715447819615 {
    name = 'TablesFix1715447819615'

    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_e63173ac43b478c2fc0cc20ac3\` ON \`groups\``);
        await queryRunner.query(`ALTER TABLE \`parents\` DROP COLUMN \`childId\``);
        await queryRunner.query(`ALTER TABLE \`journal\` ADD CONSTRAINT \`journal_childrens\` FOREIGN KEY (\`childId\`) REFERENCES \`childrens\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`journal\` DROP FOREIGN KEY \`journal_childrens\``);
        await queryRunner.query(`ALTER TABLE \`journal\` DROP INDEX \`IDX_a1a165a9e30bbd1bcd8fe3369b\``);
        await queryRunner.query(`ALTER TABLE \`parents\` ADD \`childId\` int NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_e63173ac43b478c2fc0cc20ac3\` ON \`groups\` (\`teacherId\`)`);
    }
}
