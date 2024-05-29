const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class TablesFix1715447691999 {
    name = 'TablesFix1715447691999'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`groups\` ADD UNIQUE INDEX \`IDX_e63173ac43b478c2fc0cc20ac3\` (\`teacherId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_e63173ac43b478c2fc0cc20ac3\` ON \`groups\` (\`teacherId\`)`);
        await queryRunner.query(`ALTER TABLE \`groups\` ADD CONSTRAINT \`group_teachers\` FOREIGN KEY (\`teacherId\`) REFERENCES \`teachers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`groups\` DROP FOREIGN KEY \`group_teachers\``);
        await queryRunner.query(`DROP INDEX \`REL_e63173ac43b478c2fc0cc20ac3\` ON \`groups\``);
        await queryRunner.query(`ALTER TABLE \`groups\` DROP INDEX \`IDX_e63173ac43b478c2fc0cc20ac3\``);
    }
}
