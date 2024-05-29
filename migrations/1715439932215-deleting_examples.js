const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class DeletingExamples1715439932215 {

    async up(queryRunner) {
        await queryRunner.query(`DROP TABLE posts_categories_categories;`);
        await queryRunner.query(`DROP TABLE posts;`);
        await queryRunner.query(`DROP TABLE categories;`);
    }

    async down(queryRunner) {
    }

}
