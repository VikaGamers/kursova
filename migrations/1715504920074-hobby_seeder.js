const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class HobbySeeder1715504920074 {

    async up(queryRunner) {
        const childrens = await queryRunner.query('SELECT * FROM childrens');
        const hobbygroups = await queryRunner.query('SELECT * FROM hobbygroups');
        childrens.forEach(async (child)=>{
            let random = Math.random()
            if(random < 0.3)
            await queryRunner.query('INSERT INTO hobbygroups_childrens_childrens (hobbygroupsId,childrensId) VALUES (?,?)',[hobbygroups[0].id,child.id]);
            else if(random < 0.6)
            await queryRunner.query('INSERT INTO hobbygroups_childrens_childrens (hobbygroupsId,childrensId) VALUES (?,?)',[hobbygroups[1].id,child.id]);
            else if(random > 0.6)
            await queryRunner.query('INSERT INTO hobbygroups_childrens_childrens (hobbygroupsId,childrensId) VALUES (?,?)',[hobbygroups[2].id,child.id]);
        })
    }

    async down(queryRunner) {
        await queryRunner.query('DELETE FROM hobbygroups_childrens_childrens');
    }

}
