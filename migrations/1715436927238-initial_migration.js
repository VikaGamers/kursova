const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class InitialMigration1715436927238 {
    name = 'InitialMigration1715436927238'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`posts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`text\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categories\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`childrens\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`birthDate\` date NOT NULL, \`groupId\` int NOT NULL, \`lockerNum\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`groups\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cabinet\` int NOT NULL, \`title\` varchar(255) NOT NULL, \`teacherId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hobbygroups\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`time\` time NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`journal\` (\`id\` int NOT NULL AUTO_INCREMENT, \`childId\` int NOT NULL, \`presence\` tinyint NOT NULL, \`date\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`parents\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`job\` varchar(255) NOT NULL, \`sex\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`childId\` int NOT NULL, \`childrensId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`teachers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`salary\` double NOT NULL, \`phone\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posts_categories_categories\` (\`postsId\` int NOT NULL, \`categoriesId\` int NOT NULL, INDEX \`IDX_f50a96e3d32263cc97588d91d6\` (\`postsId\`), INDEX \`IDX_bb4ea8658b6d38df2a5f93cd50\` (\`categoriesId\`), PRIMARY KEY (\`postsId\`, \`categoriesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`hobbygroups_childrens_childrens\` (\`hobbygroupsId\` int NOT NULL, \`childrensId\` int NOT NULL, INDEX \`IDX_b7b0de2d11ddd4b54b4abdcf54\` (\`hobbygroupsId\`), INDEX \`IDX_6cdc6d5cd00a9f00aebddfb922\` (\`childrensId\`), PRIMARY KEY (\`hobbygroupsId\`, \`childrensId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`parents\` ADD CONSTRAINT \`FK_984d850aeca1a209058780389ee\` FOREIGN KEY (\`childrensId\`) REFERENCES \`childrens\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`posts_categories_categories\` ADD CONSTRAINT \`FK_f50a96e3d32263cc97588d91d6e\` FOREIGN KEY (\`postsId\`) REFERENCES \`posts\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`posts_categories_categories\` ADD CONSTRAINT \`FK_bb4ea8658b6d38df2a5f93cd506\` FOREIGN KEY (\`categoriesId\`) REFERENCES \`categories\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`hobbygroups_childrens_childrens\` ADD CONSTRAINT \`FK_b7b0de2d11ddd4b54b4abdcf54a\` FOREIGN KEY (\`hobbygroupsId\`) REFERENCES \`hobbygroups\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`hobbygroups_childrens_childrens\` ADD CONSTRAINT \`FK_6cdc6d5cd00a9f00aebddfb922e\` FOREIGN KEY (\`childrensId\`) REFERENCES \`childrens\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`hobbygroups_childrens_childrens\` DROP FOREIGN KEY \`FK_6cdc6d5cd00a9f00aebddfb922e\``);
        await queryRunner.query(`ALTER TABLE \`hobbygroups_childrens_childrens\` DROP FOREIGN KEY \`FK_b7b0de2d11ddd4b54b4abdcf54a\``);
        await queryRunner.query(`ALTER TABLE \`posts_categories_categories\` DROP FOREIGN KEY \`FK_bb4ea8658b6d38df2a5f93cd506\``);
        await queryRunner.query(`ALTER TABLE \`posts_categories_categories\` DROP FOREIGN KEY \`FK_f50a96e3d32263cc97588d91d6e\``);
        await queryRunner.query(`ALTER TABLE \`parents\` DROP FOREIGN KEY \`FK_984d850aeca1a209058780389ee\``);
        await queryRunner.query(`DROP INDEX \`IDX_6cdc6d5cd00a9f00aebddfb922\` ON \`hobbygroups_childrens_childrens\``);
        await queryRunner.query(`DROP INDEX \`IDX_b7b0de2d11ddd4b54b4abdcf54\` ON \`hobbygroups_childrens_childrens\``);
        await queryRunner.query(`DROP TABLE \`hobbygroups_childrens_childrens\``);
        await queryRunner.query(`DROP INDEX \`IDX_bb4ea8658b6d38df2a5f93cd50\` ON \`posts_categories_categories\``);
        await queryRunner.query(`DROP INDEX \`IDX_f50a96e3d32263cc97588d91d6\` ON \`posts_categories_categories\``);
        await queryRunner.query(`DROP TABLE \`posts_categories_categories\``);
        await queryRunner.query(`DROP TABLE \`teachers\``);
        await queryRunner.query(`DROP TABLE \`parents\``);
        await queryRunner.query(`DROP TABLE \`journal\``);
        await queryRunner.query(`DROP TABLE \`hobbygroups\``);
        await queryRunner.query(`DROP TABLE \`groups\``);
        await queryRunner.query(`DROP TABLE \`childrens\``);
        await queryRunner.query(`DROP TABLE \`categories\``);
        await queryRunner.query(`DROP TABLE \`posts\``);
    }
}
