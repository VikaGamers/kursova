const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class TablesFix1715452262438 {

    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_a1a165a9e30bbd1bcd8fe3369b\` ON \`journal\``);
        await queryRunner.query(`DROP INDEX \`REL_a1a165a9e30bbd1bcd8fe3369b\` ON \`journal\``);
    }

    async down(queryRunner) {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_a1a165a9e30bbd1bcd8fe3369b\` ON \`journal\` (\`childId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_a1a165a9e30bbd1bcd8fe3369b\` ON \`journal\` (\`childId\`)`);
    }

}
