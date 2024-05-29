var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Child", // Will use table name `post` as default behaviour.
    tableName: "childrens", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        description: {
            type: "text",
        },
        birthDate:{
            type:"date"
        },
        lockerNum: {
            type: 'int'
        }
    },
    relations: {
        groups: {
            target: "Group",
            type: "many-to-one",
            cascade: true,
        },
    },
})