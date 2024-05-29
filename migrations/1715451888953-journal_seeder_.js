const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class JournalSeeder_1715451888953 {

    async up(queryRunner) {
        const children = await queryRunner.query(`SELECT * FROM childrens`);
        if(children.length){
            for(let child of children){
                await queryRunner.query('INSERT INTO journal (childId, presence, date) VALUES (?,?,?)',
                [child.id,child.id%2==0?1:0,'2024-05-05'])
            }
            for(let child of children){
                await queryRunner.query('INSERT INTO journal (childId, presence, date) VALUES (?,?,?)',
                [child.id,child.id%2==0?1:0,'2024-05-03'])
            }
            for(let child of children){
                await queryRunner.query('INSERT INTO journal (childId, presence, date) VALUES (?,?,?)',
                [child.id,child.id%2==0?1:0,'2024-05-02'])
            }
        }

    }

    async down(queryRunner) {
        queryRunner('DELETE FROM journal');
    }

}
