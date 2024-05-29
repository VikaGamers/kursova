var typeorm = require("typeorm")
var dataSource = require("./datasource")
var Child = require("./entities/Child");
var Group = require("./entities/Group");
var Journal = require("./entities/Journal");
var HobbyGroup = require("./entities/HobbyGroup");
dataSource.initialize()
    .then(async function () {
        const ChildrenParents = await dataSource.getRepository(Child).createQueryBuilder("childrens")
        .innerJoin("parents","mother","mother.childrensId = c.id AND mother.sex = 'жінка'")
        .innerJoin("parents","father","father.childrensId = c.id AND father.sex != 'жінка'")
        .innerJoin("journal","j","j.childId = c.id")
        .select("DISTINCT c.name as Children, mother.name as Mother, mother.phone as MothersPhone,father.phone as FathersPhone, father.name as Father, c.birthDate, c.lockerNum")
        .addSelect("((SUM(CASE WHEN `j`.`presence` = 1 THEN 1 ELSE 0 END) / NULLIF(SUM(CASE WHEN `j`.`presence` IN (0, 1) THEN 1 ELSE 0 END), 0)) * 100) AS presencePercent")
        .from("childrens","c")
        .where("EXISTS ( SELECT 1  FROM `parents` AS `mother_check` WHERE `mother_check`.`childrensId` = `c`.`id` AND `mother_check`.`sex` = 'жінка' ) AND EXISTS ( SELECT 1  FROM `parents` AS `father_check` WHERE `father_check`.`childrensId` = `c`.`id` AND `father_check`.`sex` != 'жінка' )")
        .groupBy("`c`.`name`, `mother`.`name`, `mother`.`phone`, `father`.`name`, `father`.`phone`, `c`.`birthDate`, `c`.`lockerNum`")
        .getRawMany()
        console.log('==============================================Діти та батьки==============================================');
        console.log(ChildrenParents);
        console.log('============================================================================================');
        const groups = await dataSource.getRepository(Group).createQueryBuilder("groups")
        .select(" g.title, AVG(presence)*100 as presenceAvg, COUNT(DISTINCT c.id) as ChildrenCount")
        .from("groups","g")
        .innerJoin("childrens","c","c.groupsId = g.id")
        .innerJoin("journal","j","j.childId = c.id")
        .groupBy("g.title")
        .getRawMany();
        console.log('==============================================Кількість дітей в групах та % відвідуваності ==============================================');
        console.log(groups);
        console.log('============================================================================================');
        const presenceAtDay = await dataSource.getRepository(Journal).createQueryBuilder("j")
        .innerJoin("childrens","c","c.id = j.childId")
        .select("c.name,j.date")
        .where("j.date = :date AND j.presence = 1",{ date:'2024-05-05' })
        .getRawMany();
        console.log('==============================================Відвідуваність в конкретний день==============================================');
        console.log(presenceAtDay);
        console.log('============================================================================================');

        const hobbygroups = await dataSource.getRepository(HobbyGroup).createQueryBuilder("hg")
        .innerJoin("hobbygroups_childrens_childrens","hgc","hgc.hobbygroupsId = hg.id")
        .innerJoin("childrens","c","c.id = hgc.childrensId")
        .select("COUNT(DISTINCT c.id) as ChildrensCount, hg.title as Hobby, hg.time as Time")
        .groupBy("hg.title, hg.time").getRawMany();
        console.log('==============================================Кількість дітей в кружках==============================================');
        console.log(hobbygroups);
        console.log('============================================================================================');

        
        const hobbygroupsChildren = await dataSource.getRepository(HobbyGroup).createQueryBuilder("hg")
        .innerJoin("hobbygroups_childrens_childrens","hgc","hgc.hobbygroupsId = hg.id")
        .innerJoin("childrens","c","c.id = hgc.childrensId")
        .select("c.name as Children, hg.title as Hobby, hg.time as Time")
        .getRawMany();
        console.log('==============================================Діти в кружках==============================================');
        console.log(hobbygroupsChildren);
        console.log('============================================================================================');

    })
    .catch(function (error) {
        console.log("Error: ", error)
    })